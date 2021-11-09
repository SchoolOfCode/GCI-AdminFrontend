import React, { useState, useEffect, useRef } from "react";
import { Divider, Heading, Text } from "@chakra-ui/layout";
import MainButton from "../MainButton";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Rating } from "react-simple-star-rating";
import DeleteButton from "../DeleteButton";
import VideoPlayer from "../VideoPlayer";
import acceptedText from "./acceptedText";
import rejectedText from "./rejectedText";
import { useWindowSize } from "../../hooks/useWindowSize";
import { detectMob } from "../../functions/detectMob";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const axios = require("axios");

export default function CurrentApplication({
  currentApplication,
  setCurrentApplication,
  setCurrentSearchFilter,
}) {
  const initialFocusRef = useRef();
  const [rating1, setRating1] = useState(1);
  const [rating2, setRating2] = useState(1);
  const [rating3, setRating3] = useState(1);
  const [rating4, setRating4] = useState(1);
  const [stage2, setStage2] = useState("");
  const [stage3, setStage3] = useState("");
  const [stage4, setStage4] = useState("");
  const [totalScore, setTotalScore] = useState(4);
  const [averageScore, setAverageScore] = useState(1);
  //   // for mobile interface usage
  const [width] = useWindowSize();
  const [margin, setMargin] = useState("270");
  useEffect(() => {
    if (width <= 1080 || detectMob()) {
      setMargin("240");
    }
    if (width > 1080) {
      setMargin("480");
    }
  }, [width]);
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
        axios
          .patch(
            `https://gci-backend.herokuapp.com/users/${currentApplication.id}?column=interview`,
            { interview: true }
          )
          .then(() => window.location.reload(true))
      );
  }
  function setFinal() {
    axios
      .patch(
        `https://gci-backend.herokuapp.com/users/${currentApplication.id}?column=current_stage`,
        { stage: 7 }
      )
      .then(
        axios
          .patch(
            `https://gci-backend.herokuapp.com/users/${currentApplication.id}?column=final`,
            {
              final: {
                final: acceptedText(currentApplication),
              },
            }
          )
          .then(
            axios.patch(
              `https://gci-backend.herokuapp.com/users/${currentApplication.id}?column=status`,
              {
                status: "Accepted",
              }
            )
          )
          .then(() => window.location.reload(true))
      );
  }

  function setRejected() {
    axios
      .patch(
        `https://gci-backend.herokuapp.com/users/${currentApplication.id}?column=current_stage`,
        { stage: 7 }
      )
      .then(
        axios
          .patch(
            `https://gci-backend.herokuapp.com/users/${currentApplication.id}?column=final`,
            {
              final: {
                final: rejectedText(currentApplication),
              },
            }
          )
          .then(
            axios.patch(
              `https://gci-backend.herokuapp.com/users/${currentApplication.id}?column=status`,
              {
                status: "Rejected",
              }
            )
          )
          .then(() => window.location.reload(true))
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
        <Heading className="m-5">Stage 1 - Applicant information</Heading>
        <Table
          className="shadow-inner"
          size="half"
          variant="simple"
          fontWeight="semibold"
        >
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
        </Table>
        <p>Rating:</p>
        <Rating onClick={handleRating1} ratingValue={rating1} />
      </section>
      <Divider />
      <Heading className="m-5">Stage 2 - Pixel Character</Heading>
      <Divider />
      <Text className="text-lg font-semibold m-5">Username: {stage2}</Text>
      <p>Rating:</p>
      <Rating onClick={handleRating2} ratingValue={rating2} />
      <Divider />
      <Heading className="m-5">Stage 3 - Video</Heading>
      <Divider />
      <VideoPlayer video={stage3} />
      <Text className="text-md text-blue-600 font-semibold m-5">
        <a href={stage3} target="_blank" rel="noopener noreferrer">
          {stage3}
        </a>
      </Text>
      <p>Rating:</p>
      <Rating onClick={handleRating3} ratingValue={rating3} />
      <Divider />
      <Heading className="m-5">Stage 4 - Scratch Game</Heading>
      <Divider />
      <Text className="text-md text-blue-600 font-semibold m-5">
        <a href={stage4} target="_blank" rel="noopener noreferrer">
          Link to Scratch game: {stage4}
        </a>
      </Text>
      <p>Rating:</p>
      <Rating onClick={handleRating4} ratingValue={rating4} />
      <Text className="m-1 font-bold">Total score: {totalScore} </Text>
      <Text className="m-1 font-bold">Average score: {averageScore} </Text>
      <section>
        <Popover
          initialFocusRef={initialFocusRef}
          placement="start"
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <Button
              marginRight="2"
              _hover={{ bg: "#000818" }}
              size="lg"
              bg="red"
              color="white"
              _active={{
                transform: "scale(0.75)",
              }}
            >
              Reject
            </Button>
          </PopoverTrigger>
          <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
            <PopoverHeader pt={4} fontWeight="bold" border="0">
              CONFIRM
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>Please confirm rejection</PopoverBody>
            <PopoverFooter
              border="0"
              d="flex"
              alignItems="center"
              justifyContent="space-between"
              pb={4}
            >
              <MainButton
                buttonText="REJECT"
                buttonColor="red"
                m="m-3 shadow-lg"
                onClick={setRejected}
              />
            </PopoverFooter>
          </PopoverContent>
        </Popover>

        <Popover
          initialFocusRef={initialFocusRef}
          placement="right"
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <Button
              marginLeft="2"
              _hover={{ bg: "#000818" }}
              size="lg"
              bg="green"
              color="white"
              _active={{
                transform: "scale(0.75)",
              }}
            >
              Invite to Interview
            </Button>
          </PopoverTrigger>
          <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
            <PopoverHeader pt={4} fontWeight="bold" border="0">
              CONFIRM
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>Please confirm invitation to interview</PopoverBody>
            <PopoverFooter
              border="0"
              d="flex"
              alignItems="center"
              justifyContent="space-between"
              pb={4}
            >
              <MainButton
                buttonText="INTERVIEW"
                buttonColor="green"
                m="m-3 shadow-lg"
                onClick={setInterview}
              />
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </section>
      <Heading className="m-5">After Interview</Heading>
      <section>
        <Popover
          initialFocusRef={initialFocusRef}
          placement="start"
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <Button
              marginRight="2"
              _hover={{ bg: "#000818" }}
              size="lg"
              bg="red"
              color="white"
              _active={{
                transform: "scale(0.75)",
              }}
            >
              Reject
            </Button>
          </PopoverTrigger>
          <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
            <PopoverHeader pt={4} fontWeight="bold" border="0">
              CONFIRM
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>Please confirm rejection</PopoverBody>
            <PopoverFooter
              border="0"
              d="flex"
              alignItems="center"
              justifyContent="space-between"
              pb={4}
            >
              <MainButton
                buttonText="REJECT"
                buttonColor="red"
                m="m-3 shadow-lg"
                onClick={setRejected}
              />
            </PopoverFooter>
          </PopoverContent>
        </Popover>
        <Popover
          initialFocusRef={initialFocusRef}
          placement="right"
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <Button
              marginLeft="2"
              _hover={{ bg: "#000818" }}
              size="lg"
              bg="green"
              color="white"
              _active={{
                transform: "scale(0.75)",
              }}
            >
              Invite to Bootcamp
            </Button>
          </PopoverTrigger>
          <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
            <PopoverHeader pt={4} fontWeight="bold" border="0">
              CONFIRM
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>Please confirm invitation to Bootcamp</PopoverBody>
            <PopoverFooter
              border="0"
              d="flex"
              alignItems="center"
              justifyContent="space-between"
              pb={4}
            >
              <MainButton
                buttonText="BOOTCAMP"
                buttonColor="green"
                m="m-3 shadow-lg"
                onClick={setFinal}
              />
            </PopoverFooter>
          </PopoverContent>
        </Popover>
        <Popover
          initialFocusRef={initialFocusRef}
          placement="right"
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <Button
              marginLeft="2"
              _hover={{ bg: "#000818" }}
              size="lg"
              bg="Orange"
              color="white"
              _active={{
                transform: "scale(0.75)",
              }}
            >
              Delete User
            </Button>
          </PopoverTrigger>
          <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
            <PopoverHeader pt={4} fontWeight="bold" border="0">
              CONFIRM
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              Please confirm application will be deleted
            </PopoverBody>
            <PopoverFooter
              border="0"
              d="flex"
              alignItems="center"
              justifyContent="space-between"
              pb={4}
            >
              <DeleteButton userId={currentApplication.id} />
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </section>
    </section>
  );
}
