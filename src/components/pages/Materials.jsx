// Importing Modules
import React, { useState } from "react";
import styled from "styled-components";

import Otter from "../../assets/images/Otter.jpg";
import Penguin from "../../assets/images/Penguin.jpg";
import Zebra from "../../assets/images/Zebra.jpg";
import PolarBear from "../../assets/images/PolarBear.jpg";
import Tiger from "../../assets/images/Tiger.jpg";
import Giraffe from "../../assets/images/Giraffe.jpg";
import Elephant from "../../assets/images/Elephant.jpg";

// JSON file of animals (needed to be in SQL code but ran out of time)
const animals = [
  {
    image: `${Otter}`,
    name: "Otter",
    description:
      "The otter is a small aquatic mammal known for its playful behavior. It has a sleek body, webbed feet, and a thick fur coat that keeps it warm in cold water. Otters are skilled swimmers and can often be seen sliding down riverbanks.",
    diet: "Carnivore",
    habitat: "River",
    location: "North America",
    weight: "10-30 lbs",
    height: "1-4 ft",
    lifespan: "10-15 years",
    status: "Endangered",
  },
  {
    image: `${Penguin}`,
    name: "Penguin",
    description:
      "Penguins are small aquatic birds that are well-adapted to life in the cold. They have a streamlined body, flipper-like wings, and a unique waddling walk. Penguins are excellent swimmers and can dive deep to catch fish.",
    diet: "Carnivore",
    habitat: "Cold climate",
    location: "Antarctica",
    weight: "2-90 lbs",
    height: "1-4 ft",
    lifespan: "6-25 years",
    status: "Least concern",
  },
  {
    image: `${Zebra}`,
    name: "Zebra",
    description:
      "Zebras are large land mammals known for their distinctive black and white stripes. They have a strong social structure and live in herds. Zebras are herbivores and graze on grasses and other vegetation in the savannah.",
    diet: "Herbivore",
    habitat: "Savannah",
    location: "Africa",
    weight: "440-990 lbs",
    height: "3-5 ft",
    lifespan: "25 years",
    status: "Least concern",
  },
  {
    image: `${PolarBear}`,
    name: "Polar Bear",
    description:
      "Polar bears are large aquatic mammals that are perfectly adapted to life in the Arctic. They have a thick layer of blubber and a dense fur coat that keeps them warm in freezing temperatures. Polar bears are skilled hunters and primarily feed on seals.",
    diet: "Carnivore",
    habitat: "Arctic",
    location: "Arctic Circle",
    weight: "900-1,600 lbs",
    height: "6-10 ft",
    lifespan: "25-30 years",
    status: "Vulnerable",
  },
  {
    image: `${Tiger}`,
    name: "Tiger",
    description:
      "Tigers are large land mammals known for their strength and agility. They have a distinctive orange coat with black stripes. Tigers are solitary animals and are skilled hunters. They primarily feed on large ungulates such as deer and boar.",
    diet: "Carnivore",
    habitat: "Jungle",
    location: "Asia",
    weight: "220-660 lbs",
    height: "3-4 ft",
    lifespan: "10-15 years",
    status: "Endangered",
  },
  {
    image: `${Giraffe}`,
    name: "Giraffe",
    description:
      "Giraffes are the tallest land mammals in the world. They have long necks, long legs, and a spotted coat. Giraffes are herbivores and feed on leaves from tall trees. They have a unique way of drinking water by spreading their front legs and bending down.",
    diet: "Herbivore",
    habitat: "Savannah",
    location: "Africa",
    weight: "1,500-2,800 lbs",
    height: "14-18 ft",
    lifespan: "25 years",
    status: "Vulnerable",
  },
  {
    image: `${Elephant}`,
    name: "Elephant",
    description:
      "Elephants are the largest land mammals on Earth. They have a thick, gray skin, a long trunk, and large tusks. Elephants are highly intelligent and have a complex social structure. They are herbivores and consume a large amount of vegetation every day.",
    diet: "Herbivore",
    habitat: "Jungle",
    location: "Africa",
    weight: "4,400-12,000 lbs",
    height: "8-13 ft",
    lifespan: "60-70 years",
    status: "Endangered",
  },
];

export default function Materials() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLocationFilter = (e) => {
    setFilterLocation(e.target.value);
  };

  const handleStatusFilter = (e) => {
    setFilterStatus(e.target.value);
  };

  // Search Feature to match the input to the animals statistic
  const filteredAnimals = animals.filter((animal) => {
    return (
      (animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        animal.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        animal.diet.toLowerCase().includes(searchTerm.toLowerCase()) ||
        animal.habitat.toLowerCase().includes(searchTerm.toLowerCase()) ||
        animal.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        animal.weight.toLowerCase().includes(searchTerm.toLowerCase()) ||
        animal.height.toLowerCase().includes(searchTerm.toLowerCase()) ||
        animal.lifespan.toLowerCase().includes(searchTerm.toLowerCase()) ||
        animal.status.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterLocation === "" ||
        animal.location.toLowerCase() === filterLocation.toLowerCase()) &&
      (filterStatus === "" ||
        animal.status.toLowerCase() === filterStatus.toLowerCase())
    );
  });

  // If for some reason the image is not available then a placeholder image can be used
  // It is a bit slow but it should prevent the website from returning an error
  // Free to use (Section 5): https://unsplash.com/terms
  filteredAnimals.forEach((animal) => {
    if (animal.image === undefined) {
      animal.image = `https://source.unsplash.com/200x200/?${animal.name}`;
    }
  });

  return (
    <StyledDiv>
      <StyledTitle>Find out more about our animals!</StyledTitle>
      {/* Search Input */}
      <StyledSearchDiv>
        <StyledSVG
          fill="#000000"
          height="200px"
          width="200px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 490.4 490.4"
          xml:space="preserve"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796 s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"></path>{" "}
            </g>{" "}
          </g>
        </StyledSVG>
        <StyledSearchInput
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchTerm}
        />
      </StyledSearchDiv>

      {/* Filter Dropdowns */}
      <button>Guided Tour</button>
      <select value={filterLocation} onChange={handleLocationFilter}>
        <option value="">Any Locations</option>
        <option value="North America">North America</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Africa">Africa</option>
        <option value="Arctic Circle">Arctic Circle</option>
        <option value="Asia">Asia</option>
      </select>

      <select value={filterStatus} onChange={handleStatusFilter}>
        <option value="">Any Statuses</option>
        <option value="Least concern">Least Concern</option>
        <option value="Vulnerable">Vulnerable</option>
        <option value="Endangered">Endangered</option>
      </select>

      {/* If no animals return "No materials found", otherwise, return the animal/s */}
      {filteredAnimals.length === 0 ? (
        <StyledText>No materials found.</StyledText>
      ) : (
        filteredAnimals.map((animal) => (
          <>
            <MaterialLayout>
              <StyledImage src={animal.image} alt={animal.name} />
              <StyledText>
                <StyledMainText>Name: {animal.name}</StyledMainText>
                <StyledMainText>
                  Description: {animal.description}
                </StyledMainText>
                <StyledMainText>Diet: {animal.diet}</StyledMainText>
                <StyledMainText>Habitat: {animal.habitat}</StyledMainText>
                <StyledMainText>Location: {animal.location}</StyledMainText>
                <StyledMainText>Weight: {animal.weight}</StyledMainText>
                <StyledMainText>Height: {animal.height}</StyledMainText>
                <StyledMainText>Lifespan: {animal.lifespan}</StyledMainText>
                <StyledMainText>Status: {animal.status}</StyledMainText>
              </StyledText>
            </MaterialLayout>
            <br />
            <br />
          </>
        ))
      )}
    </StyledDiv>
  );
}

// Styles
const StyledDiv = styled.div`
  padding: 50px;
  @media (max-width: 750px) {
    padding: 5px;
  }
`;

const MaterialLayout = styled.div`
  display: flex;
  border: 5px solid green;
  border-radius: 25px;
  align-items: center;
  justify-content: space-evenly;
  padding: 40px;
  background-color: #cfffcf;
  @media (max-width: 750px) {
    flex-direction: column;
    padding: 0px;
  }
`;

const StyledText = styled.p`
  font-size: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 20px;
  flex-direction: column;
  @media (max-width: 750px) {
    width: 400px;
  }
`;

const StyledImage = styled.img`
  min-width: 200px;
  max-width: 200px;
  min-height: 200px;
  max-height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 50px;
`;

const StyledMainText = styled.div``;

const StyledTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-transform: capitalize;
`;

const StyledSearchInput = styled.input`
  padding: 10px;
  padding-left: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const StyledSearchDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledSVG = styled.svg`
  position: absolute;
  scale: 0.1;
  left: -33px;
  @media (max-width: 750px) {
    left: -72px;
  }
`;
