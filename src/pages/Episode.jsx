import React, { useEffect, useState } from "react";
import { axiosInstance } from "../axios/axiosHttps";
import EpisodeCards from "../components/EpisodeCards";

const Episode = () => {
  const [episodes, setEpisodes] = useState();
  console.log(episodes);

  useEffect(() => {
    axiosInstance
      .get("/episode")
      .then((res) => setEpisodes(res?.data?.results));
  }, []);
  return (
    <div className="container">
      <div className="card-parent">
        {episodes?.map((item) => (
          <EpisodeCards key={item?.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Episode;
