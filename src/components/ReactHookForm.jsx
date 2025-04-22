import React from "react";
import { useForm } from "react-hook-form";

//useForm -
// register, handlesubmit

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="myform"
      >
        <h1>Submit your Details</h1>
        <input
          type="text"
          className={`input mt-2 w-full ${
            errors.firstName ? "border border-red-500" : ""
          }`}
          placeholder="FIRST NAME"
          {...register("firstName", { required: "First Name is required" })}
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
          {...register("lastName", { required: "Last Name is required" })}
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
          {...register("email", { required: "Email Name is required" })}
        />
        <p className="text-red-500">{errors.email && errors.email.message}</p>
        <button type="submit" className="btn btn-accent">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
