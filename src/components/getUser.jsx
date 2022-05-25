import React, { useEffect, useState } from "react";
import axios from "axios";

const getUser = () => {
  const [user, setUser] = useState([]);
  const [loding, setLoading] = useState(true);

  const getAllUser = async () => {
    const res = await axios.get("http://localhost:5000/person");
    console.log(res);
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
      {user.map((data) => (
        <p>
          <h4>{data.name}</h4>
        </p>
      ))}
      <p>-------------------------------------------------------</p>
    </div>
  );
};

export default getUser;
