import React from "react";
import { NavLink } from "react-router-dom";
import styles from './styles.module.css';
import ProfileForm from "./components/profile-form/profile-form";

export const Profile = () => (
  <main className={styles.wrapper}>
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <NavLink
            activeClassName={styles.link_active}
            className={`${styles.link} text text_type_main-medium`}
            to="/profile"
            exact
          >
            Профиль
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.link_active}
            className={`${styles.link} text text_type_main-medium`}
            to="/profile/orders"
          >
            История заказов
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.link_active}
            className={`${styles.link} text text_type_main-medium`}
            to="/login"
          >
            Выход
          </NavLink>
        </li>
      </ul>
      <p
        className={`${styles.text} text text_type_main-default text_color_inactive`}
      >
        В этом разделе вы можете изменить свои персональные данные
      </p>
    </nav>
    <aside>
      <ProfileForm />
    </aside>
  </main>
);

export default Profile;