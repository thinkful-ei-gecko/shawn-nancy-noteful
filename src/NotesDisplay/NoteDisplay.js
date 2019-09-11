import React from 'react';
import { Link } from 'react-router-dom'


export default class NoteDisplay extends React.Component{
    render(){
        console.log(this.props.match.params.folderId)
        const folderId = this.props.match.params.folderId
        const filterNotes = this.props.notes.filter( note => {
            return note.folderId === folderId 
        })
        return(
    
            <div className="notesList">
                {filterNotes.map(note => 
                <li key={note.id}>
                    <Link to={`/note/${note.id}`} key={note.id}>{note.name}</Link>
                </li>
                )}
                <button className="add-to-folder">Add Note</button>
            </div>
         
        )
    }
}