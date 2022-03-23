import React, {useState} from "react";


function CreateArea(props){

  const [noteText, setNoteText] = useState({
      title: "",
      content:""
  });

  

    function handleChange(event) {
            const {name, value} = event.target;
            setNoteText(
               prevValue => {
                   return {
                       ...prevValue,
                       [name]: value
                   };
               });
               
              event.preventDefault();
    }

 
    return(
        <div>
            <form>
                <input onChange={handleChange} value={noteText.title} name="title" placeholder="Title" type="text"/>
                <textarea onChange={handleChange} value={noteText.content} name="content" placeholder="Take a note..." rows="3"></textarea>
                <button type="button"  onClick={() => {
          props.onAdd(noteText);
          setNoteText({
              title: "", 
              content:""
              });
        }}
                >Add</button>
            </form>
        </div>
    );
}

export default CreateArea;

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
