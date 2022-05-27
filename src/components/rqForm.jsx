import React from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import { usePostPersonData } from "../services/userService/user";

const RqForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
    addUser(data);
  };

  const { mutate: addUser, error, isError, isLoading } = usePostPersonData();

  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>React-query form handling....</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: 6,
        }}
      >
        <TextField
          type="text"
          placeholder="name"
          {...register("name", { required: true })}
        />
        <TextField type="email" placeholder="email" {...register("email")} />
        <Button variant="contained" type="submit" color="secondary">
          RQ form submit
        </Button>
      </form>
    </div>
  );
};

export default RqForm;
