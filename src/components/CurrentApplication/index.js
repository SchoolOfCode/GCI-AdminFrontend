import React, { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/layout";
import MainButton from "../MainButton";
import { Text } from "@chakra-ui/layout";
import { Rating } from "react-simple-star-rating";
import VideoPlayer from "../VideoPlayer";
const axios = require("axios");

export default function CurrentApplication({
  currentApplication,
  setCurrentApplication,
}) {
  const [rating1, setRating1] = useState(1);
  const [rating2, setRating2] = useState(1);
  const [rating3, setRating3] = useState(1);
  const [rating4, setRating4] = useState(1);
  const [totalScore, setTotalScore] = useState(4);
  const [averageScore, setAverageScore] = useState(1);

  function handleRating1(rate) {
    setRating1(rate);
    setTotalScore(rate + rating2 + rating3 + rating4);

    setAverageScore((rate + rating2 + rating3 + rating4) / 4);
  }
  function handleRating2(rate) {
    setRating2(rate);
    setTotalScore(rating1 + rate + rating3 + rating4);
    setAverageScore((rating1 + rate + rating3 + rating4) / 4);
  }
  function handleRating3(rate) {
    setRating3(rate);
    setTotalScore(rating1 + rating2 + rate + rating4);
    setAverageScore((rating1 + rating2 + rate + rating4) / 4);
  }
  function handleRating4(rate) {
    setRating4(rate);
    setTotalScore(rating1 + rating2 + rating3 + rate);
    setAverageScore((rating1 + rating2 + rating3 + rate) / 4);
  }

  function setInterview() {
    axios
      .patch(
        `https://gci-backend.herokuapp.com/users/${currentApplication.id}?column=current_stage`,
        { stage: 6 }
      )
      .then(
        axios.patch(
          `https://gci-backend.herokuapp.com/users/${currentApplication.id}?column=interview`,
          { interview: { interview: true } }
        )
      );
  }
  function setFinal() {
    axios
      .patch(
        `https://gci-backend.herokuapp.com/users/${currentApplication.id}?column=current_stage`,
        { stage: 7 }
      )
      .then(
        axios.patch(
          `https://gci-backend.herokuapp.com/users/${currentApplication.id}?column=final`,
          { final: { final: true } }
        )
      );
  }

  // function to update interview stage
  // function to update final stage
  // function to accept / reject
  let s1 = currentApplication.stage_1 || {};
  let questions = [
    "Accepted bootcamp requirements",
    "First Name",
    "Last Name",
    "Email",
    "Phone Number",
    "Date of Birth",
    "Gender",
    "Background",
    "Other Background",
    "City and Country of Origin",
    "Current Post Code",
    "National Insurance Number",
    "Disability/illness or infirmity",
    "Which disability/illness or infirmity",
    "Region of Application",
    "Current situation status",
    "Industry of employment",
    "Personal annual income",
    "Current household income",
    "Primary language",
    "Highest education qualification",
    "Other education qualification",
    "University degree subject",
    "Relationship status",
    "Children",
    "How many children",
    "Religion",
    "Other religion",
    "Current housing status",
    "Reason for joining School of Code",
    "Found about School of Code via",
  ];

  return (
    <section>
      <MainButton
        onClick={() => setCurrentApplication({ empty: true })}
        buttonText="< Back"
      />
      <section className="stage1section">
        <Heading className="mt-5 mb-3">Stage 1 - Applicant information</Heading>
        {questions.map((value, index) => (
          <div className="flex flex-row ">
            {" "}
            <Text fontWeight="semibold" className="mr-2">
              {value}:
            </Text>{" "}
            <Text>{`${s1[index]}`}</Text>
          </div>
        ))}
        <Rating onClick={handleRating1} ratingValue={rating1} />
        <Heading className="mt-5">Stage 2 - Pixel Character</Heading>
        <Heading className="text-md font-semibold mb-5">
          {currentApplication.stage_2.link && <div></div>}
        </Heading>
        <Rating onClick={handleRating2} ratingValue={rating2} />

        <Heading className="mt-5">Stage 3 - Video</Heading>
        <VideoPlayer video={currentApplication.stage_3.link} />
        <Heading className="text-md font-semibold mb-5">
          {currentApplication.stage_3.link && <div></div>}
        </Heading>
        <Rating onClick={handleRating3} ratingValue={rating3} />

        <Heading className="mt-5">Stage 4 - Scratch Game</Heading>
        <Heading className="text-md font-semibold mb-5">
          {currentApplication.stage_4.link && <div></div>}
        </Heading>
        <Rating onClick={handleRating4} ratingValue={rating4} />
        <Heading className="mt-2">TOTAL SCORE: {totalScore} </Heading>
        <Heading className="mt-2">AVERAGE SCORE: {averageScore} </Heading>
        <section className="flex flex-row align-items-center">
          <MainButton buttonText="Reject" buttonColor="red" m="m-3" />
          <MainButton
            buttonText="Invite to Interview"
            buttonColor="green"
            m="m-3"
            onClick={setInterview}
          />
        </section>
        <Heading className="mt-2">AFTER INTERVIEW</Heading>
        <section className="flex flex-row align-items-center">
          <MainButton buttonText="Get Wrekt" buttonColor="red" m="m-3" />
          <MainButton
            buttonText="Invite to Bootcamp :)"
            buttonColor="green"
            m="m-3"
            onClick={setFinal}
          />
        </section>
      </section>
    </section>
  );
}
