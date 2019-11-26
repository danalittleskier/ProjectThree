import React from "react";
import { TextInput, Container } from 'react-materialize';



function Home({onChange, value}) {
  return (
    <Container>
      <h1 className="center">Welcome Home</h1>
      <TextInput placeholder="enter a search term" onChange={onChange} value={value}/>

    </Container>
  );
}

export default Home;
