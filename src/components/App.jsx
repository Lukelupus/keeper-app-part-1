import React, {useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea";


function App() {
  
  const [newNote, setNewNote] = useState([]);


  function addNote(noteText) {
   
   setNewNote(prevNotes => {

     return [...prevNotes, noteText]
     
   })
   
   
        
}
  function deleteNote(id) {
    setNewNote(
      prevNotes => {
        return prevNotes.filter((note, index) => {
          return index !== id;
        });
      });
  }

return <div>
    <Header />
      <CreateArea onAdd={addNote}/>
   
      {newNote.map((note, index) => {
       return( <Note onChecked={deleteNote} id={index} key={index} title={note.title} content={note.content} />)
      
      })}
    
       
      
      <Footer />
  </div>
}

export default App;

//- Add new note to an array.
//- Take array and render seperate Note components for each item.