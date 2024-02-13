'use client';

import { useState } from "react";

export function RegisterForm(props) {
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const password = data.get("password");
    if (!password) {
      setError("Por favor introduce tu contraseña");
      return;
    }

    const signInResponse = await signIn("credentials.register", {
      email: data.get("email"),
      password: password,
      redirect: false,
    });

    if (signInResponse && !signInResponse.error) {
      // Redirect to homepage (/timeline)
      router.push("/timeline");
    } else {
      console.log("Error: ", signInResponse);
      setError("Ha ocurrido un error");
    }
  };

  return (
    <form
      className="w-full mt-8 text-xl text-black  flex flex-col"
      onSubmit={handleSubmit}
    >
      {error && (
        <span className="p-4 mb-2 text-lg font-semibold text-white bg-red-500 rounded-md">
          {error}
        </span>
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        required
        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Repite tu Contraseña"
        required
        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="w-full h-12 px-6 mt-4 text-lg text-white transition-colors duration-150 bg-green-600 rounded-lg focus:shadow-outline hover:bg-green-700"
      >
        Registrarme ahora!
      </button>
    </form>
  );
};

