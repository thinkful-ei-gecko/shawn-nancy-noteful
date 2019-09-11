import React from 'react';
import NoteSection from './NoteSection/NoteSection'
import FolderSection from './FolderSection/FolderSection'


export default class Homepage extends React.Component{

    render(){
        return (
            <>
                <FolderSection />
                <NoteSection />
            </>
        )
    }
}