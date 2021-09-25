import NotesList from './Components/NotesList';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Search from './Components/Search'
import Header from './Components/Header';
const App = () => {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkmode')));

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);
  useEffect(() => {
    localStorage.setItem('darkmode', JSON.stringify(darkMode))
  }, [darkMode])

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    window.location.reload();
  }

  const editNote = (text, id) => {
    let updatedList = notes.map(item => {
      if (item.id == id) {
        return { ...item, text: text }; //gets everything that was already in item, and updates "done"
      }
      return item; // else return unmodified item 
    });
    setNotes(updatedList);
  }

  return <div className={`${darkMode && 'dark-mode'}`}>
    <div className='container'>
      <Header handleToggleDarkMode={setDarkMode} />
      <Search handleSearchNote={setSearchText} /><NotesList handleDeleteNote={deleteNote}
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
        handleAddNote={addNote}
        handleEditNote={editNote} /></div>
  </div>
};

export default App;
