import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      {props.phonetic.text}
      <br />
      {props.phonetic.audio.length > 0 ? (
        <>
          <br />

          <a
            href={props.phonetic.audio}
            target="_blank"
            rel="noreferrer"
            className="pronunciation"
          >
            pronunciation
          </a>
        </>
      ) : null}
    </div>
  );
}
