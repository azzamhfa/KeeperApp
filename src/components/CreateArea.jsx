import React, { useState } from "react";

function CreateArea(props) {
  const [inputChange, setInputChange] = useState({ title: "", content: "" });

  function inputHandler(event) {
    const { value, name } = event.target;
    console.log(event.target.name);
    setInputChange((prevValue) => {

      return name === "title"
        ? { title: value, content: prevValue.content }
        : { title: prevValue.title, content: value };
    });
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          //   console.log(inputChange);
          props.onAdd(inputChange);
          event.preventDefault();
        }}
      >
        <input onChange={inputHandler} name="title" placeholder="Title" />
        <textarea
          onChange={inputHandler}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
