import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
});

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const handleFormSubmit = (data) => {
    console.log(data);
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
        <button type="submit" className="w-full mt-2 btn btn-accent">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
