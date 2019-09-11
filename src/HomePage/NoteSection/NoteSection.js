import React from 'react'
import { Link } from 'react-router-dom'
import Store from '../../Store/Store'


export default class NoteSection extends React.Component{

    render(){
        return(
            <section>
                <ul className="notesList">
                    {Store.notes.map((note) =>
            
                    <li key={note.id}>
                        <Link to={`/note/${note.id}`}>{note.name}</Link> 
                        <span>{note.modified}</span>

                    </li>
                    )}
                </ul>
            </section>
        )
    }

}