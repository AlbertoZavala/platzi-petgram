import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Error, Form, Input, Button, Title } from "./styles";

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
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
