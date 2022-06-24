import React, { useState } from "react";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './styles.module.css';

const ProfileForm = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className={styles.form}>
      <Input
        type="text"
        placeholder="Имя"
        onChange={(evt) => setName(evt.target.value)}
        icon="EditIcon"
        value={name}
        name="name"
        error={false}
        errorText="Ошибка"
        size="default"
      />
      <Input
        type="email"
        placeholder="Логин"
        onChange={(evt) => setLogin(evt.target.value)}
        icon="EditIcon"
        value={login}
        name="name"
        error={false}
        errorText="Ошибка"
        size="default"
      />
      <Input
        type="password"
        placeholder="Пароль"
        onChange={(evt) => setPassword(evt.target.value)}
        icon="EditIcon"
        value={password}
        name="name"
        error={false}
        errorText="Ошибка"
        size="default"
      />
    </form>
  );
};

export default ProfileForm;
