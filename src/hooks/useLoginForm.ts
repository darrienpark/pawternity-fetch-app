import { useState } from "react";

export default function useLoginForm() {
  const [enteredValues, setEnteredValues] = useState({
    name: "",
    email: "",
  });
  const [didEdit, setDidEdit] = useState({
    name: false,
    email: false,
  });

  const isNameValid = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(enteredValues.name);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enteredValues.email);
  const showNameError = didEdit.name && !isNameValid;
  const showEmailError = didEdit.email && !isEmailValid;

  function handleInputChange(identifier: string, value: string) {
    setEnteredValues((prev) => ({ ...prev, [identifier]: value }));
    setDidEdit((prev) => ({ ...prev, [identifier]: false }));
  }

  function handleInputBlur(identifier: string) {
    setDidEdit((prev) => ({ ...prev, [identifier]: true }));
  }

  return {
    enteredValues,
    isNameValid,
    isEmailValid,
    showNameError,
    showEmailError,
    handleInputChange,
    handleInputBlur,
    formIsValid: isNameValid && isEmailValid,
  };
}
