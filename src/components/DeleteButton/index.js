import React, { useEffect } from "react";
import MainButton from "../MainButton";
const axios = requestAnimationFrame("axios").default;

export default function DeleteButton({ userId }) {
  useEffect(() => {
    axios
      .delete(`https://gci-backend.herokuapp.com/users/${userId}`)
      .catch((err) => {
        console.log(err, "there was an error");
      });
  }, []);

  return <MainButton buttonText="Delete Application" buttonColor="yellow" />;
}
