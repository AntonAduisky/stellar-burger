import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const inputRef = useRef(null);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <main className={styles.wrapper}>
      <form className={styles.form}>
        <h2
          className={`${styles.title} text text_type_main-medium mb-6`}
        >
          Восстановление пароля
        </h2>
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Укажите e-mail"
            onChange={onEmailChange}
            value={email}
            name="e-mail"
            error={false}
            ref={inputRef}
            errorText="Ошибка"
            size="default"
          />
        </div>
        <Button disabled={!(email)} type="primary" size="medium">
          Восстановить
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
