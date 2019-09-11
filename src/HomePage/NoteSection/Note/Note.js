import React from 'react';


export default class Note extends React.Component {
    render() {
        //console.log(this.props.match.params)
        //console.log(this.props.match)
        //console.log(this.props)


        const noteId = this.props.match.params.noteId

        const note = this.props.selectedNote.find( note => {
            console.log(note.noteId, noteId)
            return note.id === noteId
        })

        
        //console.log(note);

        return (

            <div className="selected">
                {note.name}
                {note.content}
            </div>
        );
    }
}


