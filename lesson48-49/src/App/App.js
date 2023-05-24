import React from "react";
import "./App.scss";
import { Header, Contact, News } from "../Header/Header";
import { Banner } from "../Banner/Banner";
import { Blog, SinglePost } from "../Blog/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="contact" element={<Contact />} />
        <Route path="news" element={<News />} />
        <Route path="blog/:postId" element={<SinglePost />} />
      </Routes>
      <Banner />
      <Blog />
    </BrowserRouter>
  );
}

export default App;
