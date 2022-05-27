import React from "react";
// import axios from "axios";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import thr from "lodash/throttle";
import de from "lodash/debounce";

import axios from "../services/axiosInstance";
import * as userService from "../services/userService/user";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({});

  const submit = async (data) => {
    try {
      await userService.postUser(data);
      // console.log(data);
      // console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const throttleMethod = React.useCallback(
    thr(submit, 1000, { leading: false }),
    []
  );

  // const throttleMethod = thr(async (data) => {
  //   try {
  //     const res = await axios.post("http://localhost:5000/person", data);
  //     console.log(data);
  //     console.log(res);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, 3000);

  // const myFun = thr(() => {
  //   console.log(" my fun called.");
  // }, 3000);

  return (
    <div>
      <form
        onSubmit={handleSubmit(throttleMethod)}
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
        <Button variant="contained" type="submit">
          Submit
        </Button>
        {/* <Button onClick={myFun}>click</Button> */}
      </form>
    </div>
  );
};

export default Form;
