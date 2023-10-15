import React , {useState} from "react";
import Header from "./Header"
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App(){

    const[notes,setNotes] = useState([]);

    function addNote(note){
        setNotes(prevNote => {
            return [
                ...prevNote,
                note
            ]
        })
    }

    function deleteNote(id){
        console.log(id);
        setNotes(prevNotes => {
            return notes.filter((noteItem,index) =>{
                return index !== id;
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd = {addNote}/>
            {notes.map((noteItem,index) =>{
                return <Note title = {noteItem.title} content = {noteItem.content} onDelete = {deleteNote} key = {index} id={index}/>
            })}
            <Footer />
        </div>
    );
}

export default App;