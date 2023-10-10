import React from "react"; 
import NavBar from './components/NavBar';
import {Routes,Route} from 'react-router-dom';
import HomePage from "./components/HomePage";
import PostBlog from "./components/PostBlog";
import EditBlog from "./components/EditBlog";
import Footer from "./components/Footer";


function App() {
  return (
      <Routes>
        <Route path="/post-blog" element={<><NavBar/><PostBlog/></>} exact="true" />
        <Route path="/edit-blog" element={<><NavBar/><EditBlog/></>} exact="true" />
        <Route path="/" element={<><NavBar/><HomePage/><Footer/></>} exact="true"/>
      </Routes>
  );
};

export default App;
