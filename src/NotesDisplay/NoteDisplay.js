import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment'


export default class NoteDisplay extends React.Component{
    render(){
        console.log(this.props.match.params.folderId)
        const folderId = this.props.match.params.folderId
        const filterNotes = this.props.notes.filter( note => {
            return note.folderId === folderId 
        })
        return(
            <section>
                <ul className="filtered notesList">
                    {filterNotes.map(note => 
                    <li key={note.id} className="singleNote">
                        <Link to={`/note/${note.id}`} key={note.id}>{note.name}</Link>
                        <div className="flex">
                            <span>date modified on {moment(note.modified).format('Do MMMM YYYY')}</span>
                            <button className="deleteButton">Delete Note</button>
                        </div>
                    </li>
                    )}
                    <button className="add-to-folder">Add Note</button>
                </ul>
            </section>
         
        )
    }
}