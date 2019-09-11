import React from 'react'
import Note from '../Note/Note'


export default class NoteSection extends React.Component{

    render(){
        return(
            <section>
                <ul>
                    <Note />
                </ul>
            </section>
        )
    }

}