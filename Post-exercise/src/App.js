import { Component } from "react";
import Posts from "./components/post_components/Posts";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import './App.css'

class App extends Component {
  render() {
    return (
      <Box sx={{height: '100%'}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/posts' element={<Posts />}></Route>
          </Routes>
        </Router>        
      </Box>
    )
  }
}

export default App