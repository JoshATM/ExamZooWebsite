// Importing Modules
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Tickets() {
  const navigate = useNavigate("");

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [seniors, setSeniors] = useState(0);

  const [selectedDay, setSelectedDay] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Increases and Decreases Counters
  const adultsIncrement = () => {
    setAdults(adults + 1);
  };
  const adultsDecrement = () => {
    setAdults(adults - 1);
    if (adults <= 0) {
      setAdults(0);
    }
  };

  const childrenIncrement = () => {
    setChildren(children + 1);
  };
  const childrenDecrement = () => {
    setChildren(children - 1);
    if (children <= 0) {
      setChildren(0);
    }
  };

  const seniorsIncrement = () => {
    setSeniors(seniors + 1);
  };
  const seniorsDecrement = () => {
    setSeniors(seniors - 1);
    if (seniors <= 0) {
      setSeniors(0);
    }
  };

  // London Zoo Prices
  const adultPrice = 33.0;
  const childrenPrice = 21.0;
  const seniorsPrice = 31.0;
  const Total =
    adults * adultPrice + children * childrenPrice + seniors * seniorsPrice;

  const GetMonthYear = new Date(currentYear, currentMonth).toLocaleDateString(
    "en-UK",
    {
      month: "long",
      year: "numeric",
    }
  );

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const DaySelected = (e) => {
    setSelectedDay(e.target.textContent);
  };

  {
    /* Calendar Controls */
  }
  const handlePreviousMonth = () => {
    if (
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    ) {
      return;
    }
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 0) {
        setCurrentYear((prevYear) => currentYear - 1);
        return 11;
      } else {
        return prevMonth - 1;
      }
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 11) {
        setCurrentYear((prevYear) => currentYear + 1);
        return 0;
      } else {
        return prevMonth + 1;
      }
    });
  };

  {
    /* Calendar Days Buttons */
  }
  const daysArray = Array.from(
    { length: getDaysInMonth(currentMonth, currentYear) },
    (_, index) => index + 1
  );

  const isDateDisabled = (day) => {
    const today = new Date();
    const selectedDate = new Date(currentYear, currentMonth, day);
    return selectedDate < today;
  };

  {
    /* It would redirect to Stripe but I didn't have enough time to integrate it in the exam */
  }
  const Submit = () => {
    // Redirect to Stripe
    navigate("/dashboard");
  };

  return (
    <StyledContainer>
      <CalenderContainer>
        <CalenderCardContainer>
          <CalenderTitle>
            <StyledArrowButton
              onClick={handlePreviousMonth}
              disabled={
                currentMonth === new Date().getMonth() &&
                currentYear === new Date().getFullYear()
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zm1.289-15.7 1.422 1.4-4.3 4.344 4.289 4.245-1.4 1.422-5.714-5.648"
                  fill={
                    currentMonth === new Date().getMonth() &&
                    currentYear === new Date().getFullYear()
                      ? "#ccc"
                      : "white"
                  }
                  cursor={
                    currentMonth === new Date().getMonth() &&
                    currentYear === new Date().getFullYear()
                      ? "not-allowed"
                      : "pointer"
                  }
                />
              </svg>
            </StyledArrowButton>
            {GetMonthYear}
            <StyledArrowButton onClick={handleNextMonth}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347"
                  fill="white"
                />
              </svg>
            </StyledArrowButton>
          </CalenderTitle>
          <CalenderDays>
            {/* Maps through the amount of days in the month and disables any days before and including that day */}
            {daysArray.map((day) => (
              <Days
                key={day}
                onClick={DaySelected}
                disabled={isDateDisabled(day)}
                selected={selectedDay === day}
                disabledOpacity={0.5}
                disabledCursor="not-allowed"
              >
                {day}
              </Days>
            ))}
          </CalenderDays>
        </CalenderCardContainer>
      </CalenderContainer>
      <CardContainer>
        {/* Waits until a day is selected and then displays the tickets available */}
        {selectedDay != null ? (
          <>
            <p>
              Book a day for {selectedDay} {GetMonthYear} to visit the zoo
            </p>
            <PersonTypeContainer>
              <PersonTypeCardContainer>
                <PersonTypeStyledText>
                  Adult: £{adultPrice}
                </PersonTypeStyledText>
                <PersonTypeButtonContainer>
                  <PersonTypeButton onClick={adultsDecrement}>
                    -
                  </PersonTypeButton>
                  <span>{adults}</span>
                  <PersonTypeButton onClick={adultsIncrement}>
                    +
                  </PersonTypeButton>
                </PersonTypeButtonContainer>
              </PersonTypeCardContainer>
              <PersonTypeCardContainer>
                <PersonTypeStyledText>
                  Children: £{childrenPrice}
                </PersonTypeStyledText>
                <PersonTypeButtonContainer>
                  <PersonTypeButton onClick={childrenDecrement}>
                    -
                  </PersonTypeButton>
                  <span>{children}</span>
                  <PersonTypeButton onClick={childrenIncrement}>
                    +
                  </PersonTypeButton>
                </PersonTypeButtonContainer>
              </PersonTypeCardContainer>
              <PersonTypeCardContainer>
                <PersonTypeStyledText>
                  Seniors: £{seniorsPrice}
                </PersonTypeStyledText>
                <PersonTypeButtonContainer>
                  <PersonTypeButton onClick={seniorsDecrement}>
                    -
                  </PersonTypeButton>
                  <span>{seniors}</span>
                  <PersonTypeButton onClick={seniorsIncrement}>
                    +
                  </PersonTypeButton>
                </PersonTypeButtonContainer>
              </PersonTypeCardContainer>
              <PriceText>Total: £{Total}</PriceText>
              <SubmitButton onClick={Submit}>Submit</SubmitButton>
            </PersonTypeContainer>
          </>
        ) : (
          <>
            <p>Please select a day to visit the zoo</p>
          </>
        )}
      </CardContainer>
    </StyledContainer>
  );
}

// Styles
const StyledContainer = styled.div`
  display: flex;
  margin-top: 30px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const CalenderContainer = styled.div`
  display: flex;
  width: 40%;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

const CalenderCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #1a8940;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 10px;
  text-align: center;
  width: 400px;
  max-height: 275px;
  @media (max-width: 750px) {
    min-height: 275px;
    max-height: none;
  }
`;

const Days = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  transition: 0.3s ease;
  opacity: ${(props) => (props.disabled ? props.disabledOpacity : 1)};
  cursor: ${(props) => (props.disabled ? props.disabledCursor : "pointer")};
  background: #00bf33;
  border-radius: 5px;
  color: white;
  width: 40px;
  height: 40px;
  border: none;
  &:hover {
    background: green;
  }
`;

const CalenderDays = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 10px;
  width: 100%;
  align-content: center;
  gap: 10px;
`;

const StyledArrowButton = styled.button`
  border: none;
  background: none;
`;

const CalenderTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 30px;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
  color: white;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  width: 100%;
  p {
    font-size: 20px;
    margin: 0;
    padding: 0;
  }
`;

const PersonTypeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PersonTypeCardContainer = styled.div`
  background: #ebbf4b;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 20px;
  text-align: center;
  width: 200px;
  height: 100px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PersonTypeButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-content: center;
  flex-wrap: wrap;
  width: -webkit-fill-available;
`;

const PriceText = styled.p``;

const PersonTypeButton = styled.button`
  background: green;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 30px;
  transition: 0.3s ease;

  &:hover {
    background: #00681c;
  }
`;

const PersonTypeStyledText = styled.p`
  font-size: 30px;
`;

const SubmitButton = styled.button`
  color: white;
  font-family: "Playpen Sans", cursive;
  border-radius: 12.5px;
  border: none;
  background: #1a8940;
  width: 100px;
  height: 35px;
  cursor: pointer;
`;
