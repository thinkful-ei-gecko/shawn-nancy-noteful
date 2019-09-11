import React from 'react';
import NoteSection from './NoteSection/NoteSection'
import FolderSection from './FolderSection/FolderSection'
import './App.css';

class App extends React.Component {

 
  render() {
    return (
      <div className="App">
        <a href="/">Noteful</a>
        <section>
          <NoteSection />
          <FolderSection />

        </section>

      </div>
    );
  }
}

export default App;
