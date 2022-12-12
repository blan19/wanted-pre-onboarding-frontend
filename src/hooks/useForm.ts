import { FormEvent, useCallback, useMemo, useRef, useState } from "react";
import fieldValidator from "../utils/validator";

interface UseFormProps {
  initialState: {
    [key: string]: boolean;
  };
  callback?: (fieldValue: {
    [key: string]: FormDataEntryValue;
  }) => Promise<any>;
}

export type Fields = "email" | "password" | "todo";

export type FieldsValues = [key: Fields, value: string][];

export default function useForm({ initialState, callback }: UseFormProps) {
  const ref = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [valid, setValid] = useState(initialState);
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const abled = useMemo(
    () => Object.values(valid).every((v) => v === true),
    [valid]
  );

  const handleOnValid = useCallback((name: string, valid: boolean) => {
    setValid((prev) => ({ ...prev, [name]: valid }));
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError(false);
      setSuccess(false);
      if (!callback) return;
      const formData = new FormData(e.currentTarget);
      const fieldValues = Object.fromEntries(formData.entries());
      const fields = Object.entries(fieldValues) as unknown as FieldsValues;
      const fieldsIsValid = fields.every(
        ([key, value]) => !fieldValidator[key](value)
      );

      setWasSubmitted(true);

      if (fieldsIsValid) {
        e.currentTarget.reset();
        callback(fieldValues)
          .then(() => setSuccess(true))
          .catch(() => setError(true));
      }
    },
    [callback]
  );

  return {
    ref,
    abled,
    wasSubmitted,
    success,
    error,
    handleSubmit,
    handleOnValid,
  };
}
