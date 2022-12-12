const fieldValidator = {
  email: (value: string | undefined) => {
    if (!value) return "필수로 입력해야합니다.";

    const valueIsEmailPattern =
      /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/.test(value);

    if (!valueIsEmailPattern) {
      return "이메일을 입력해주세요.";
    }

    return null;
  },
  password: (value: string | undefined) => {
    if (!value) return "필수로 입력해야합니다.";

    const valueIsLongEnough = value.length >= 8;

    if (!valueIsLongEnough) {
      return "8글자 이상이여야 합니다.";
    }

    return null;
  },
  todo: (value: string | undefined) => {
    if (!value) return "필수로 입력해야합니다.";

    const valueIsLongEnough = value.length >= 1;

    if (!valueIsLongEnough) {
      return "1글자 이상이여야 합니다.";
    }

    return null;
  },
};

export default fieldValidator;
