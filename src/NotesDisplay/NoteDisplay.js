import React from 'react';


export default class NoteDisplay extends React.Component{
    render(){
        console.log(this.props.match.params.folderId)
        const folderId = this.props.match.params.folderId
        const filterNotes = this.props.notes.filter( note => {
            return note.folderId === folderId 
        })
        return(
    
            <div className="notesList">
                {filterNotes.map(note => <p key={note.id}>{note.name}</p>)}
            </div>
         
        )
    }
}