import React from 'react';
import styled from 'styled-components';


const Section= styled.div`
display: flex;
justify-content: center;

@media only screen and (max-width: 768px) {
    width: 100%;
  }

`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  };

`;

const Links = styled.div`
display: flex;
align-items: center;
gap: 50px;

`;

const Logo = styled.img`
  height: 40px;
`;
const List = styled.ul`
display: flex;
gap: 20px;
list-style: none;
cursor: pointer;
@media only screen and (max-width: 768px) {
    display: none;
  }

`;
const ListItem = styled.li`
  cursor: pointer;
`;
const Icons = styled.div`
display: flex;
align-items: center;
gap: 20px;
`;
const Icon = styled.img`
width: 20px;
height: 20px;
cursor: pointer;

`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


function Navbar() {
  return (
    <Section>
     <Container>
     <Links>
      <Logo src ="./image/logoipsum-225.svg" />
      <List>
        <ListItem>Home</ListItem>
        <ListItem>Studio</ListItem>
        <ListItem>Works</ListItem>
        <ListItem>Contacts</ListItem>
      </List>
      </Links>
      <Icons>
        <Icon src="./image/search-icon-png-2.png"/>
        <Button>
            Hire Now
        </Button>
      </Icons>
     
      </Container>
    </Section>
  )
}

export default Navbar;
