import React, { useEffect, useState } from "react";
import { getStory } from "../../services";
import { useParams } from "react-router-dom";
import LoadingService from "../loadingService";
import './style.css'

export default function Story() {
  const [story, setStory] = useState();
  const [loading, setLoading] = useState(false);
  const param = useParams();
  useEffect(() => {
    setLoading(true);
    getStory(param.uid).then((res) => {
      setStory(res.data());
      setLoading(false);
    });
    return () => {};
  }, [param]);
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;
    return `${formattedDay}/${formattedMonth}/${year}`;
  };
  return (
    <div className="site-content">
      {loading && <LoadingService />}
      <div className="container">
        {story && !loading && (
          <div className="single-story">
            <div className="thumnail">
              <img src={story.thumnail} alt={story.title} />
            </div>
            <div className="content">
              <h3> {story.title} </h3>
              <p> {story.content} </p>
              {story?.date && <p> {formatTimestamp(story.date)} </p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
