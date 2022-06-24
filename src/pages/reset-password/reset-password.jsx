import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './styles.module.css';

export const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const inputRef = useRef(null);

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onCodeChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <main className={styles.wrapper}>
      <form className={styles.form}>
        <h1
          className={`${styles.title} text text_type_main-medium mb-6`}
        >
          Восстановление пароля
        </h1>
        <PasswordInput
          onChange={onPasswordChange}
          value={password}
          name="password"
          placeholder="Введите новый пароль"
        />
        <div className="mb-6 mt-6">
          <Input
            type="text"
            placeholder="Введите код из письма"
            onChange={onCodeChange}
            value={code}
            name="e-mail"
            error={false}
            ref={inputRef}
            errorText="Ошибка"
            size="default"
          />
        </div>
        <Button type="primary" size="medium">
          Сохранить
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive">
        {"Вспомнили пароль? "}
        <Link className={styles.link} to="/login">
          Войти
        </Link>
      </p>
    </main>
  );
};
