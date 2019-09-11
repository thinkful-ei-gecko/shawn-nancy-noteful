import React from 'react';
import { Route, Link } from 'react-router-dom'
import NoteSection from './HomePage/NoteSection/NoteSection'
import './App.css';
import NoteDisplay from './NotesDisplay/NoteDisplay'
import FolderSection from './HomePage/FolderSection/FolderSection'


class App extends React.Component {


  render() {
    console.log(this.store);
    return (
      <div className="App">
        <Link to="/">Noteful</Link>
        <main className="app-container">

          <Route path='/' component={FolderSection}/>
          <Route exact path='/' component={NoteSection} />
          <Route exact path='/:folderId' render={ (routeProps) => 
            <NoteDisplay notes={this.props.store.notes} 
            { ...routeProps} />} />

          

        </main>

      </div>
    );
  }
}

export default App;
