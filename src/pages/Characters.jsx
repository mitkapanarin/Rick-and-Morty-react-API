import React, { useState, useEffect } from "react";
import { axiosInstance } from "../axios/axiosHttps";
import { Link } from "react-router-dom";

function Characters() {
  const [characters, setCharacters] = useState([]);
  console.log(characters)

  useEffect(() => {
    axiosInstance.get("/character")
      .then((res) => setCharacters(res?.data?.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1>Rick and Morty Characters</h1>
      <div className="card-parent">
        {characters?.map((item) => {
          const { id, image, name, status } = item;

          return (
            <Link to={`/characters/${id}`} key={id}>
              <img src={image} alt={name} />
              <p>ID: {id}</p>
              <p>Name: {name}</p>
              <p>Status: {status}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Characters;
