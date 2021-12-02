import React from "react";
import { Link } from "react-router-dom";
import Form from "./components/Form";
import Header from "./components/1stClass/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <main className="body">
      <Header />
      <Section />
      <Form />
      <Footer />
    </main>
  );
};

export default App;
