import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
          <Route exact path="/" element={<News  title="title" source="source" author="author" description="description" url="url" urlToImage="urlToImage" publishedAt="publishedAt" content="content" text="Image Not Found!"/>}/>
          <Route exact path="/general" element={<News/>}/>
          <Route exact path="/business" element={<News/>}/>
          <Route exact path="/entertainment" element={<News/>}/>
          <Route exact path="/health" element={<News/>}/>
          <Route exact path="/science" element={<News/>}/>
          <Route exact path="/sports" element={<News/>}/>
          <Route exact path="/technology" element={<News/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

