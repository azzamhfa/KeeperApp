import React from "react";
import Note from "./Note";
import Notes from "../notes";
function Body() {
  return (
    <div>
      <body>
        {Notes.map((Notes) => (
          <Note key={Notes.key} title={Notes.title} content={Notes.content} />
        ))}
      </body>
    </div>
  );
}

export default Body;
