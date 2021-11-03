import React, { useState } from "react";
import { Heading } from "@chakra-ui/layout";
import MainButton from "../MainButton";
import { Text } from "@chakra-ui/layout";
import { Rating, RatingView } from "react-simple-star-rating";

export default function CurrentApplication({
  currentApplication,
  setCurrentApplication,
}) {
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);
  const [rating4, setRating4] = useState(0);

  function handleRating1(rate) {
    setRating1(rate);
  }
  function handleRating2(rate) {
    setRating2(rate);
  }
  function handleRating3(rate) {
    setRating3(rate);
  }
  function handleRating4(rate) {
    setRating4(rate);
  }

  console.log("scores", rating1, rating2, rating3, rating4)

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
          {currentApplication.stage_2.link}
        </Heading>
        <Rating onClick={handleRating2} ratingValue={rating2} />

        <Heading className="mt-5">Stage 3 - Video</Heading>
        <Heading className="text-md font-semibold mb-5">
          {currentApplication.stage_3.link}
        </Heading>
        <Rating onClick={handleRating3} ratingValue={rating3} />

        <Heading className="mt-5">Stage 4 - Scratch Game</Heading>
        <Heading className="text-md font-semibold mb-5">
          {currentApplication.stage_4.link}
        </Heading>
        <Rating onClick={handleRating4} ratingValue={rating4} />
      </section>
    </section>
  );
}
