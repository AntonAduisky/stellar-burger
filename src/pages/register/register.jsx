import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './styles.module.css';

export const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputRef = useRef(null);

  const onNameChange = (e) => {
    setUserName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <main className={styles.wrapper}>
      <form className={styles.form}>
        <h1 className={`${styles.title} text text_type_main-medium`}>
          Регистрация
        </h1>
        <div className="mt-6 mb-6">
          <Input
            type="text"
            placeholder="Имя"
            onChange={onNameChange}
            value={userName}
            name="name"
            error={false}
            ref={inputRef}
            errorText="Ошибка"
            size="default"
          />
        </div>
        <div className="mb-6">
          <Input
            type="text"
            placeholder="e-mail"
            onChange={onEmailChange}
            value={email}
            name="e-mail"
            error={false}
            ref={inputRef}
            errorText="Ошибка"
            size="default"
          />
        </div>
        <div className="mb-6">
          <PasswordInput
            onChange={onPasswordChange}
            value={password}
            name="password"
          />
        </div>
        <Button disabled={!(userName && email && password)} type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive">
        {"Уже зарегистрированы? "}
        <Link className={styles.link} to="/login">
          Войти
        </Link>
      </p>
    </main>
  );
};
