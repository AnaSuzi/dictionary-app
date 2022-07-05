import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      {props.phonetic.text}
      <br />
      {props.phonetic.audio.length > 0 ? (
        <>
          <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            pronunciation
          </a>
          <br />
        </>
      ) : null}
    </div>
  );
}
