import React from 'react'
import { Link } from 'react-router-dom'
import Store from '../../Store/Store'
import moment from 'moment'


export default class NoteSection extends React.Component{

    render(){
        return(
            <section>
                <ul className="notesList">
                    {Store.notes.map((note) =>
            
                    <li key={note.id}>
                        <Link to={`/note/${note.id}`}>{note.name}</Link> 
                        <span>date modified: {moment(note.modified).format('MMMM Do YYYY')}</span>

                    </li>
                    )}
                    <button className="addNoteButton">Add note</button>
                </ul>
            </section>
        )
    }

}