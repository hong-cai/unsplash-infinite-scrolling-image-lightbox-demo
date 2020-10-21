import React,{useState} from 'react';
import SearchInput from './components/SearchInput';
import{BrowserRouter as Router, Route, Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import image from './assets/img/tekapo3.jpg';
import PhotoLightbox from './components/PhotoLightbox';
function App() {
  return (
    <Router>
    <div className="App"  style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundAttachment:"fixed"
        }}>
      <Container maxWidth="md">
        <h1 className="title">New Zealand Photo Album</h1>
        <SearchInput />
        {/* <PhotoLightbox /> */}
      </Container>
    </div>
    </Router>
  );
}

export default App;
