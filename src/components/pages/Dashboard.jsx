// Importing Modules
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState(null);
  const [hotelReservations, setHotelReservations] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        return response.json();
      })
      .then(data => {
        setUser(data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      })

    fetch('http://localhost:5000/bookings')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch bookings');
        }
        return response.json();
      })
      .then(data => {
        setBookings(data);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
      })

    fetch('http://localhost:5000/reservations')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch hotel reservations');
        }
        return response.json();
      })
      .then(data => {
        setHotelReservations(data);
      })
      .catch(error => {
        console.error('Error fetching hotel reservations:', error);
      })}, [])

  return (
    <>
      <CardContainer>
        <Card>
          <Header>User:</Header>
          {user && (
            <>
              <p>Name: {user.firstname} {user.lastname}</p>
              <p>Email: {user.email}</p>
            </>
          )}
        </Card>
        <Card>
          <Header>Bookings:</Header>
          {/* Maps through the bookings and displays all the users bookings  */}
          {bookings && (
            <>
              {bookings.map((booking, index) => (
                <div key={index}>
                  <p>{booking.ticketType} Tickets: {booking.quantity}</p>
                  <p>{booking.ticketType} Ticket Price: £{booking.price}</p>
                </div>
              ))}
              <p>Total Price: £{bookings.reduce((acc, curr) => acc + curr.price, 0)}</p>
            </>
          )}
        </Card>
        <Card>
          <Header>Hotel Reservations:</Header>
          {/* Maps through the reservations and displays all the users reservations  */}
          {hotelReservations && (
            <>
              <p>Room Price: £{hotelReservations.roomPrice}</p>
              <p>Rooms: {hotelReservations.totalRooms}</p>
              <p>Total Price: £{hotelReservations.totalRoomPrice}</p>
            </>
          )}
        </Card>
      </CardContainer>
    </>
  );
}


// Styles
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-content: center;
  flex-wrap: wrap;
`

const Card = styled.div`
  display: flex;
  background: white;
  width: 100%;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`


const Header = styled.h1`
  font-size: 25px;
`