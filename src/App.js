import React from 'react';
import { Route, Link } from 'react-router-dom'
import NoteSection from './HomePage/NoteSection/NoteSection'
import './App.css';
import NoteDisplay from './NotesDisplay/NoteDisplay'
import FolderSection from './HomePage/FolderSection/FolderSection'
import Note from './HomePage/NoteSection/Note/Note'



class App extends React.Component {


  render() {
    console.log(this.store);
    return (
      <div className="App">
        <Link to="/" className="header">Noteful</Link>
        <main className="app-container">

          <Route path='/' component={FolderSection}/>
          <Route exact path='/' component={NoteSection} />
          
          <Route exact path='/note/:noteId' render={ (routeProps) => 
            <Note selectedNote={this.props.store.notes} 
            { ...routeProps} />} />

          <Route exact path='/folder/:folderId' render={ (routeProps) => 
            <NoteDisplay notes={this.props.store.notes} 
            { ...routeProps} />} />

        </main>

      </div>
    );
  }
}

export default App;
