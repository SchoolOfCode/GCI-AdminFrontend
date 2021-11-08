import React, { useEffect, useState } from "react";
import MainButton from "../MainButton";
const axios = require("axios").default;

export default function DeleteButton({ userId }) {
  const[deleted, setDeleted] = useState(false)

  useEffect(() => {
    axios
      .delete(`https://gci-backend.herokuapp.com/users/${userId}`)
      .catch((err) => {
        console.log(err, "there was an error");
      });
  }, [deleted]);

  return <MainButton onClick={setDeleted} buttonText="Delete Application" buttonColor="orange" />;
}
