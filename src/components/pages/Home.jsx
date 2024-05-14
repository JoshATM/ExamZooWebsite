// Importing Modules
import styled from 'styled-components'
import React from 'react'
import Line from '../Line'
import ZooCarousel from '../../assets/videos/ZooCarousel.mp4'
import Tiger from '../../assets/images/Tiger.jpg'
import Zebras from '../../assets/images/Zebras.jpg'
import Orangatang from '../../assets/images/Orangatang.jpg'
import Flamingoes from '../../assets/images/Flamingoes.jpg'
import Elephant from '../../assets/images/Elephant.jpg'



export default function Home() {
  return (
    <HomeContainer>
      <Carousel loop muted autoPlay src={ZooCarousel}/>
      <Line lineTop="875px"/>

      <TextBoxContainer>
        <TextBox>
          <StyledContainerImage src={Tiger} alt='Tiger'/>
            <StyledContainerText>
              Welcome to our vibrant and dynamic zoo, where the magic of nature meets the joy of discovery! Our website is designed to transport you to a world where wildlife roams freely, and every visit is an adventure.
            </StyledContainerText>
        </TextBox>
        <TextBox>
          <StyledContainerImage src={Zebras} alt='Zebras'/>
          <StyledContainerText>
            Explore our vast collection of exotic animals, from the majestic elephants to the playful monkeys, all in a beautifully landscaped environment that mimics their natural habitats.
          </StyledContainerText>
        </TextBox>
        <TextBox>
          <StyledContainerImage src={Orangatang} alt='Orangatang'/>
          <StyledContainerText>
            Capture the essence of our zoo with stunning images and videos that showcase the beauty and diversity of our animal collection.
          </StyledContainerText>
        </TextBox>
      </TextBoxContainer>
      
      <Line lineTop="1375px" mediaTop="-10px"/>

      <StyledImage src={Flamingoes} alt='Flamingoes'/>

      <Line lineTop="2000px" mediaTop="-10px"/>

      <InverseTextBoxContainer>
        <InverseTextBox>
          <InverseContainerImage src={Elephant} alt='Elephant'/>
          <div>
          <InverseContainerText>
            Join us on this journey of discovery and conservation. Your visit to our zoo is more than just a day out; it's a step towards a better future for wildlife and the planet.
          </InverseContainerText>
          <InverseContainerText>
            Don't wait! Book your tickets today and embark on an unforgettable adventure at our zoo.
          </InverseContainerText>
          </div>
        </InverseTextBox>
      </InverseTextBoxContainer>

      <Line lineTop="2400px" mediaTop="2360px"/>

      <Line lineTop="2750px" mediaTop="2980px"/>


    </HomeContainer>
  )
}


// Styles
const HomeContainer = styled.div`  
`

const Carousel = styled.video`
width: -webkit-fill-available;
height: 700px;
object-fit: cover;
`

const TextBox = styled.div`
background: #EBBF4B;
display: flex;
justify-content: center;
align-items: center;
align-content: flex-start;
flex-wrap: wrap;
width: 350px;
height: 400px;
border-radius: 30px;
padding-top: 15px;
@media(max-width: 750px) {
  margin-bottom: 50px;
}
`


const TextBoxContainer = styled.div`
padding-top: 50px;
display: flex;
justify-content: space-evenly;
align-content: center;
flex-wrap: wrap;
align-items: center;
@media(max-width: 750px) {
  flex-direction: column;
}
`

const StyledContainerText = styled.p`
color: #009332;
width: 300px;
`

const StyledContainerImage = styled.img`
width: 320px;
height: 200px;
object-fit: cover;
border-radius: 25px;
`

const StyledImage = styled.img`
padding-top: 35px;
width: -webkit-fill-available;
height: 620px;
object-fit: cover;
`


const InverseTextBox = styled.div`
background: #4C7C35;
display: flex;
width: 90%;
height: 350px;
border-radius: 30px;
align-items: center;
align-content: center;
flex-wrap: wrap;
justify-content: center;
@media(max-width: 750px) {
  height: 520px;
}
`

const InverseTextBoxContainer = styled.div`
display: flex;
background: #EBBF4B;
justify-content: center;
align-content: center;
align-items: center;
flex-wrap: wrap;
height: 400px;
@media(max-width: 750px) {
  height: 500px;
}
`

const InverseContainerText = styled.p`
color: #EBBF4B;
width: 725px;
font-size: 25px;
text-align: center;
@media(max-width: 750px) {
  font-size: 20px;
  width: 350px;
}
`

const InverseContainerImage = styled.img`
width: auto;
height: 325px;
object-fit: cover;
border-radius: 25px;
padding: 15px;
@media(max-width: 750px) {
  height: 225px;
}

`
