import React, { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/layout";
import MainButton from "../MainButton";
import { Text } from "@chakra-ui/layout";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Rating } from "react-simple-star-rating";
import VideoPlayer from "../VideoPlayer";
const axios = require("axios");

export default function CurrentApplication({
  currentApplication,
  setCurrentApplication,
  setCurrentSearchFilter,
}) {
  const [rating1, setRating1] = useState(1);
  const [rating2, setRating2] = useState(1);
  const [rating3, setRating3] = useState(1);
  const [rating4, setRating4] = useState(1);
  const [stage2, setStage2] = useState("");
  const [stage3, setStage3] = useState("");
  const [stage4, setStage4] = useState("");
  const [totalScore, setTotalScore] = useState(4);
  const [averageScore, setAverageScore] = useState(1);
  useEffect(() => {
    if (currentApplication.stage_2) {
      setStage2(currentApplication.stage_2.link);
    }
    if (currentApplication.stage_3) {
      setStage3(currentApplication.stage_3.link);
    }
    if (currentApplication.stage_4) {
      setStage4(currentApplication.stage_4.link);
    }
  }, [stage2, stage3, stage4]);

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
          { interview: true }
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
          {
            final: {
              final: `Congratulations ${currentApplication.first_name}! You’ve made it all the way through our selection process, and having seen tons of applications, we think you'd be a perfect fit for our School of Code bootcamp. Now that the applications are finished, it's time for the hard work to begin. The bootcamp is intense! It's full-time, 9am-5pm, Monday-Friday for 16 weeks and will push you beyond your limits. It will be one of the hardest things you will ever do. If you are up for the challenge and have the commitment we are looking for to develop yourself, the School of Code is the best place for you to start your tech journey. You'll be joining the most unique coding and learning experience in the world that's equally supportive and challenging! You will be part of a team of people helping each other through a journey which you'll finish with new skills, new friends, a new career, and a new life. Please do not announce your offer publicly or on social media until we make our official public announcement next week. This is to be fair to those who haven't been successful this time. Once we've publicly announced the successful bootcampers to introduce you to the School of Code community, feel free to share and shout about the good news after that is live. Thanks for your understanding - we know you must be excited to share the news, but it will be worth the wait until after our announcement next week. You've done an amazing job getting to this point, but this is just the beginning. We're here to help you make the most of this life-changing opportunity, but it's down to you, and it has to be your choice to come on board. We're looking forward to seeing you soon, and welcome to the School of Code family! Team School of Code`,
            },
          }
        )
      );
  }

  function setRejected() {
    axios
      .patch(
        `https://gci-backend.herokuapp.com/users/${currentApplication.id}?column=current_stage`,
        { stage: 7 }
      )
      .then(
        axios.patch(
          `https://gci-backend.herokuapp.com/users/${currentApplication.id}?column=final`,
          {
            final: {
              final: `Dear ${currentApplication.first_name}, Thank you for taking the time you took completing the bootcamp application tasks. It was a pleasure to learn more about your skills and accomplishments. Unfortunately, our team did not select you for further consideration. We are happy to answer your questions if you would like any specific feedback about your application or interview. Thanks again for your interest in the School of Code Bootcamp. Regards, The School of Code Team`,
            },
          }
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
  //

  return (
    <section>
      <MainButton
        onClick={() => {
          setCurrentSearchFilter("");
          setCurrentApplication({ empty: true });
        }}
        buttonText="< Back"
      />
      <section className="stage1section">
        <Heading className="m-10">Stage 1 - Applicant information</Heading>
        <Table size="half" variant="simple" fontWeight="semibold">
          <Thead>
            <Tr>
              <Th className="text-center">Question</Th>
              <Th className="text-center">Answer</Th>
            </Tr>
          </Thead>
          <Tbody>
            {questions.map((value, index) => {
              return (
                <Tr>
                  <Td fontWeight="semibold" className="mr-2">
                    {value}:
                  </Td>{" "}
                  <Td fontWeight="normal">{`${s1[index]}`}</Td>
                </Tr>
              );
            })}
          </Tbody>
          <Rating onClick={handleRating1} ratingValue={rating1} />
        </Table>
      </section>

      <Heading className="m-10">Stage 2 - Pixel Character</Heading>
      <Heading className="text-md font-semibold mb-5">
        <a href={stage2} target="_blank">
          {stage2}
        </a>
      </Heading>
      <Rating onClick={handleRating2} ratingValue={rating2} />

      <Heading className="m-10">Stage 3 - Video</Heading>
      <VideoPlayer video={stage3} />
      <Heading className="text-md font-semibold mb-5">
        <a href={stage3} target="_blank">
          {stage3}
        </a>
      </Heading>
      <Rating onClick={handleRating3} ratingValue={rating3} />

      <Heading className="m-10">Stage 4 - Scratch Game</Heading>
      <Heading className="text-md font-semibold mb-5">
        <a href={stage4} target="_blank">
          {stage4}
        </a>
      </Heading>
      <Rating onClick={handleRating4} ratingValue={rating4} />
      <Heading className="m-10">TOTAL SCORE: {totalScore} </Heading>
      <Heading className="m-10">AVERAGE SCORE: {averageScore} </Heading>
      <section className="flex flex-row align-items-center">
        <MainButton
          buttonText="Reject"
          onClick={setRejected}
          buttonColor="red"
          m="m-3"
        />
        <MainButton
          buttonText="Invite to Interview"
          buttonColor="green"
          m="m-3"
          onClick={setInterview}
        />
      </section>
      <Heading className="m-10">AFTER INTERVIEW</Heading>
      <section className="flex flex-row align-items-center">
        <MainButton
          buttonText="Reject"
          onClick={setRejected}
          buttonColor="red"
          m="m-3"
        />
        <MainButton
          buttonText="Invite to Bootcamp :)"
          buttonColor="green"
          m="m-3"
          onClick={setFinal}
        />
      </section>
    </section>
  );
}
