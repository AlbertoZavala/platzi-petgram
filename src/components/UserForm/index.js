import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Error, Form, Input, Title } from "./styles";
import { SubmitButton } from "../SubmitButton";

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder="Email" {...email} type="email" />
        <Input disabled={disabled} placeholder="Password" {...password} type="password" />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
