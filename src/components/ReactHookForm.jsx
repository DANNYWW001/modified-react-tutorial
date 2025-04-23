import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

//useForm -
// register, handlesubmit
// yup, cod, Superstruct, joi   they are external libraries used for validation

// define our validation schema
const validationSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid Email Address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "must be 8 characters long")
    .required("Password is required"),
});

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (data) => {
    setIsSubmitting(data);

    setTimeout(() => {
      console.log(data);

      setIsSubmitting(false);
      reset();
    }, 5000);

    //after doing what youre meant to do you innvoke the reset funct
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="myform">
        <h1>Submit your Details</h1>
        <input
          type="text"
          className={`input mt-2 w-full ${
            errors.firstName ? "border border-red-500" : ""
          }`}
          placeholder="FIRST NAME"
          {...register("firstName")}
        />
        <p className="text-red-500">
          {errors.firstName && errors.firstName.message}
        </p>
        <input
          type="text"
          className={`input mt-2 w-full ${
            errors.lastName ? "border border-red-500" : ""
          }`}
          placeholder="LAST NAME"
          {...register("lastName")}
        />
        <p className="text-red-500">
          {errors.lastName && errors.lastName.message}
        </p>
        <input
          type="email"
          className={`input mt-2 w-full ${
            errors.email ? "border border-red-500" : ""
          }`}
          placeholder="EMAIL ADDRESS"
          {...register("email")}
        />
        <p className="text-red-500">{errors.email && errors.email.message}</p>
        <input
          type="password"
          placeholder="Password"
          className={`input mt-2 w-full ${
            errors.password ? "border border-red-500" : ""
          }`}
          {...register("password")}
        />
        <p className="text-red-500">
          {errors.password && errors.password.message}
        </p>
        <button type="submit" className="w-full mt-2 btn btn-accent">
          {isSubmitting ? "Subitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
