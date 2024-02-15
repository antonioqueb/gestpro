'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function SignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passError, setPassError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log("password:", password);
    console.log("confirmPassword:", confirmPassword); 
    validatePassword(password, confirmPassword);
 }, [password, confirmPassword]);

  function validatePassword(pass, confirmPass) {
    if (!pass || !confirmPass) return;
    let isValid = confirmPass.trim() === pass.trim(); 
    if (!isValid) {
      setPassError(true);
    } else {
      setPassError(false); // Clear the error if passwords match
    }
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
    if (password.trim() !== confirmPassword.trim()) {
      setPassError(true);
      return; // Stop submission if passwords don't match
    }
    let userData = {
      name,
      email,
      password,
    };

    // Make call to backend to create user
    const res = await fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    body: JSON.stringify(userData)


    
},
console.log(userData)
);


    if (res.ok) {
      const data = await res.json();
      console.log(data);
      router.push("/login");


      // registration success
    } else {
      //registration faled
      console.log("registration failed");
    }
  }
  return (

        

    <div className="antialiased bg-gradient-to-br from-gray-400 to-white">
    <div className="container px-6 mx-auto">
      <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
        <div className="flex flex-col w-full">
          <div>
            <svg
              className="w-20 h-20 mx-auto md:float-left fill-stroke text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <h1 className="text-5xl text-gray-800 font-bold">
            Gest<span className="text-green-600">Pro</span> ERP
          </h1>
          <p className="w-5/12 mx-auto md:mx-0 text-gray-600">
            Gestión transparente de tus procesos
          </p>
        </div>
        <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
          <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
              Registrarme
            </h2>
            <form
                onSubmit={handleSubmit} 
              >
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name"  >
                    Nombre Completo
                  </label>
                  <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} id="name" type="text" 
                    placeholder="Escribe tu nombre"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor="email"  >
                    Email
                  </label>
                  <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}  id="email" type="email" 
                    placeholder="Escribe tu correo electronico"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password" >
                    Contraseña
                  </label>
                  <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`} id="password" type="password"  placeholder="***********"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-6">
                  <label  className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password"   >
                    Confirmar Contraseña
                  </label>
                  <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`} id="confirm-password"  type="password" placeholder="***********"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                  {passError && (
                    <p className="text-red-500 text-xs italic">
                      Contraseñas no coinciden!
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-green-600  hover:bg-green-700 text-white font-bold py-2  px-4 rounded  focus:outline-none  focus:shadow-outline" type="submit" >
                    Sign Up
                  </button>
                  <a className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800" href="/login" >
                    Ya tienes una cuenta? Iniciar Sesión
                  </a>
                </div>
              </form>
            
            </div>
        </div>
      </div>
    </div>
  </div>
 
  );
}

export default SignIn;