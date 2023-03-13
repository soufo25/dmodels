import Contacts from "./Components/Contacts";
import Hero from "./Components/Hero";
import Who from "./Components/Who";
import Works from "./Components/Works";
import styled from "styled-components";


const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color: white;
background:url("https://raw.githubusercontent.com/safak/youtube23/3d-portfolio/public/img/bg.jpeg");
&::-webkit-scrollbar{
  display: none;
}

`;



function App() {

  return (
    <Container>
      <Hero />
      <Who/>
      <Works/>
      <Contacts/>
    </Container>
  )
}

export default App
