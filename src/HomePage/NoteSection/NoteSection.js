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
            
                    <li className="singleNote" key={note.id}>
                        <Link to={`/note/${note.id}`}>{note.name}</Link> 
                        <div className="flex">
                            <span>date modified on {moment(note.modified).format('Do MMMM YYYY')}</span>
                            <button className="deleteButton">Delete Note</button>
                        </div>
                    </li>
                    )}
                    <button className="addNoteButton">Add note</button>
                </ul>
            </section>
        )
    }

}