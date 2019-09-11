import React from 'react'

import Store from '../../Store/Store'


export default class NoteSection extends React.Component{

    render(){
        return(
            <section>
                <ul className="notesList">
                    {Store.notes.map((note) =>
            
                    <li key={note.id}>
                        {note.name}
                        <span>{note.modified}</span>
                    </li>
                    )}
                </ul>
            </section>
        )
    }

}