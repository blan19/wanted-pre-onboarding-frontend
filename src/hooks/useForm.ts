import { FormEvent, useCallback, useRef, useState } from "react";
import fieldValidator from "../utils/validator";

export type Fields = "email" | "password";

export type FieldsValues = [key: Fields, value: string][];

export default function useForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleOnInvalid = useCallback(() => {}, []);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());
    const fields = Object.entries(fieldValues) as unknown as FieldsValues;
    const fieldsIsValid = fields.every(
      ([key, value]) => !fieldValidator[key](value)
    );

    setWasSubmitted(true);

    if (fieldsIsValid) {
      e.currentTarget.reset();
      console.log(`submit : `, fieldValues);
    }
  }, []);

  return { ref, wasSubmitted, handleSubmit };
}
