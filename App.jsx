import React from 'react';
import './styles.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import File from "./components/File";
import ExtractedData from "./components/ExtractedData";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/File" element={<File />} />
          <Route path="/ExtractedData" element={<ExtractedData />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
