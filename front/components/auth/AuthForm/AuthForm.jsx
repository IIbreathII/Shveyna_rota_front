"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const AuthForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    // Явно указываем ссылку на бэкенд (NestJS)
    const BACKEND_URL = "http://localhost:3007"; // Измени на свой адрес

    // Авторизация через Google
    const Google = () => {
        router.push(`${BACKEND_URL}/auth/google`);
    };

    // Авторизация через базу данных
    const DataBase = async () => {
        if (!username || !password) {
            setError("Будь ласка, заповніть всі поля");
            return;
        }

        try {
            await axios.post(
                `${BACKEND_URL}/auth/login`,
                { username, password }, 
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true, // Включаем поддержку cookies
                }
            );

            router.push("/dashboard"); // Перенаправление после успешного входа
        } catch (err) {
            setError("Неправильне ім'я користувача або пароль");
            console.error("Помилка авторизації:", err);
        }
    };

    return (
        <div className="login-form">
            <h2 className="login-form__title">Авторизація</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="input-group">
                    <label className="login-form__label" htmlFor="username">
                        Ім&apos;я користувача
                    </label>
                    <input
                        className="login-form__input"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Введіть ім'я користувача"
                    />
                </div>
                <div className="input-group">
                    <label className="login-form__label" htmlFor="password">
                        Пароль
                    </label>
                    <input
                        className="login-form__input"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Введіть пароль"
                    />
                </div>
                <div className="button-group">
                    <button className="login-form__submit" type="button" onClick={DataBase}>
                        Увійти
                    </button>
                    <button className="google-button" type="button" onClick={Google}></button>
                </div>
            </form>
        </div>
    );
};

export default AuthForm;
