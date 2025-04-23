import React from "react";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// assuming to login correctly you have to  johndoe@gmail.com as well as the password being johnDoe
const loginFormValidator = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address") 
    .required("Email is Required"),
  password: yup
    .string()
    .required("Password is Required")
    .min(8, "Password too weak, must be more than 7 characters"),
});
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormValidator),
  });
  const redirect = useNavigate();
  const [error, setError] = useState(false);
  const onLogin = (data) => {
    console.log(data);
    const { email, password } = data;
    if (email === "johndoe@gmail.com" && password === "password") {
      // redirect
      redirect("/timeline")
    } else {
      // show error msg
      setError(true);
    }
  };
  return (
    <div className="h-[75vh] flex items-center justify-center">
      <form onSubmit={handleSubmit(onLogin)} className="myform shadow-2xl">
        <h1 className="text-2xl">Login to continue</h1>
        <input
          type="email"
          placeholder="Email Address"
          className="input mt-2 w-full"
          {...register("email")}
        />
        <p className="text-sm text-red-500 mt-0.5">{errors.email?.message}</p>
        <input
          type="password"
          placeholder="Password"
          className="input mt-2 w-full"
          {...register("password")}
        />
        <p className="text-sm text-red-500 mt-0.5">
          {errors.password?.message}
        </p>
        {error && (
          <div className="rounded-md w-full bg-red-200 p-3 my-2">
            <p className="text-red-700">Invalid Email or Password</p>
          </div>
        )}
        <button className="btn btn-primary w-full mt-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
