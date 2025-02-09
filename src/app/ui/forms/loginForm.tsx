"use client";

import { useState } from "react";
import Form from "next/form";
import { FormEvent } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData);

    await fetch("api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
  }

  return (
    <form className="justify-center flex flex-col w-full" onSubmit={onSubmit}>
      {" "}
      <input
        type="text"
        className="bg-gray-100 m-2 text-gray-600 h-9 rounded-2xl p-3"
        placeholder="E-mail Addresss"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        className="bg-gray-100 m-2 text-gray-600 h-9 rounded-2xl p-3"
        placeholder={"Password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div
        id="horizontalFlexboxSignUpButtonContainer"
        className="flex flex-row justify-center">
        <button
          id="signUpButton"
          className="flex flex-row justify-center rounded-2xl
          border-2 gap-2 p-2 mt-3 mb-1 hover:border-3 hover:font-bold
          hover:shadow-3xl"
          type="submit">
          {" "}
          <p className="font-bold"> Enter </p>
        </button>
      </div>
    </form>
  );
}
