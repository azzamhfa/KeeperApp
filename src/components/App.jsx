import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notePost, setNotePost] = useState([]);

  function addPost(inputText) {
    // console.log(inputText);
    setNotePost((prevValue) => {
      return [...prevValue, inputText];
    });
  }

  function deletePost(id) {
    setNotePost((prevPost) => {
      return prevPost.filter((postItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addPost} />
      {console.log(notePost)}
      {notePost.map((todoItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={todoItem.title}
            content={todoItem.content}
            onDelete={deletePost}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
