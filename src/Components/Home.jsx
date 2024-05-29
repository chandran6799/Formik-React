import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div
        className="text-center m-5 p-5"
        style={{
          fontFamily: "Protest Riot, sans-serif",
          fontSize: "3rem",
          color: "black",
          fontStyle: "normal",
        }}
      >
        <h1 style={{backgroundColor: "plum"}}>LIBRARY MANAGEMENT SYSTEM</h1>

        

        <br />
        <button
          style={{
            border: "none",
            margin: "0",
            padding: "0",
            backgroundColor: "white",
          }}
        >
          <Link
            to="/books"
            style={{
              textDecoration: "none",
              fontFamily: "serif",
              backgroundColor: "green",
              border: "none",
              borderRadius: "10px",
              fontSize: "30px",
              margin: "5px",
              padding: "10px",
              color: "black",
             
            }}
          >
            Click Me
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;