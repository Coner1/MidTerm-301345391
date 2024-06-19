import React from "react";
import { useForm } from "react-hook-form";

const SignUpUser = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert(JSON.stringify(data, null, 2));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up User</h1>
      <input
        {...register("firstName", { required: true })}
        placeholder="First Name"
      />
      {errors.firstName && <span>First name is required</span>}
      <input
        {...register("lastName", { required: true })}
        placeholder="Last Name"
      />
      {errors.lastName && <span>Last name is required</span>}
      <input
        {...register("userName", { required: true })}
        placeholder="User Name"
      />
      {errors.userName && <span>User name is required</span>}
      <input
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        placeholder="Email"
      />
      {errors.email && <span>Email is invalid</span>}
      <input
        type="password"
        {...register("password", { required: true })}
        placeholder="Password"
      />
      {errors.password && <span>Password is required</span>}
      <input
        type="password"
        {...register("confirmPassword", { required: true })}
        placeholder="Confirm Password"
      />
      {errors.confirmPassword && <span>Confirm password is required</span>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpUser;
