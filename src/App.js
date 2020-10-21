import React,{useState} from 'react';
import SearchInput from './components/SearchInput';
import{BrowserRouter as Router, Route, Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PhotoLightbox from './components/PhotoLightbox';
import TestScroll from './components/TestScroll';

function App() {
  return (
    <Router>
    <div className="App">
      <Container maxWidth="md">
        <h1 className="title">New Zealand Photo Album</h1>
        <SearchInput />
        <TestScroll />
        <PhotoLightbox />
      </Container>
    </div>
    </Router>
  );
}

export default App;
