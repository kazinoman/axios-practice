import React, { useEffect, useState } from "react";
// import axios from "axios";
import axios from "../services/axiosInstance";

const getUser = () => {
  const [user, setUser] = useState([]);
  const [loding, setLoading] = useState(true);

  const getAllUser = async () => {
    const res = await axios.get("/person");
    // console.log(res);
    setUser(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getAllUser();
  }, []);
  if (loding) return <p>Loading..........</p>;

  return (
    <div>
      <h1>Get all user</h1>
      {user.map((data, d) => (
        <p key={d}>
          <h4>{data.name}</h4>
        </p>
      ))}
      <p>-------------------------------------------------------</p>
    </div>
  );
};

export default getUser;
