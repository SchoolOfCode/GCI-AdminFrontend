import React from "react";

export default function Footer() {
  return (
    <div className="bg-gcinavy footer flex flex-col items-center text-white justify-center w-full h-40 static bottom-0 bg-primary-500">
      <p className="flex font-thin text-center">
        © Copyright 2021 School of Code. All Rights Reserved
      </p>{" "}
      <p className="flex font-thin text-center">
        Privacy Policy - Terms of Use
      </p>
      <p className="flex font-thin text-center">
        {" "}
        School of Code Ltd is registered in England, Company No. 09793790 School
        of Code, Custard Factory, Gibb Street, Birmingham, B9 4AA
      </p>
    </div>
  );
}
