import React from "react";
import MainButton from "../MainButton";
const axios = require("axios").default;

export default function DeleteButton({ userId }) {
  function setDeleted() {
    axios
      .delete(`https://gci-backend.herokuapp.com/users/${userId}`)
      .then(window.location.reload(true))
      .catch((err) => {
        console.log(err, "there was an error");
      });
  }

  return (
    <MainButton
      onClick={() => setDeleted()}
      buttonText="Delete Application"
      buttonColor="red"
    />
  );
}
