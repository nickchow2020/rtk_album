import React from "react";
import Line from "./ResultDisplayLine.js";
import Spin from "./Sping";
import ResultCard from "./ResultCard";
import AddOnBtn from "./AddOnBtn";
import { useSelector } from "react-redux";
import ResultSummery from "./ResultSummery";

function ResultDisplayContainer() {
  const { status, key } = useSelector((data) => data.init);
  const { resultCount, results } = useSelector((data) => data.perform);

  console.log(key);
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        maxWidth: "1280px",
        padding: "1rem 0",
      }}
    >
      <Line />
      {status === "" ? null : status === "loading" ? (
        <Spin />
      ) : (
        <>
          <ResultSummery resultCount={resultCount} reachKey={key} />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            {results.map((data, id) => (
              <ResultCard
                key={id}
                title={data.collectionCensoredName}
                imageURL={data.artworkUrl100}
                description={data.releaseDate}
              />
            ))}
          </div>
          <AddOnBtn />
        </>
      )}
    </div>
  );
}

export default ResultDisplayContainer;
