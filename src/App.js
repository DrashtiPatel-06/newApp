import "./App.css";
import React,{useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  // a="drashti"
  const pageSize = 6;
  const  apiKey = "4dbc17e007ab436fb66416009dfb59a8"
  const [progress, setProgress] = useState(0);

    return (
      <div>
        {/* Hello my first class based component {a} */}
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={progress}
            height={5}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress = {setProgress} apiKey={apiKey} 
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News setProgress = {setProgress} apiKey={apiKey} 
                  key="business"
                  pageSize={pageSize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress = {setProgress} apiKey={apiKey}
                  key="entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News setProgress = {setProgress} apiKey={apiKey}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress = {setProgress} apiKey={apiKey} 
                  key="health"
                  pageSize={pageSize}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress = {setProgress} apiKey={apiKey}
                  key="science"
                  pageSize={pageSize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress = {setProgress} apiKey={apiKey}
                  key="sports"
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress = {setProgress} apiKey={apiKey}
                  key="technology"
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
