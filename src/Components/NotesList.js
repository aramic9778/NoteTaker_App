import Note from './Note'
import AddNote from './AddNote'
const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleEditNote }) => {
    return (
        <div className='noteslist'>
            {
                notes.map((note) => <Note handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote} id={note.id} text={note.text} date={note.date} />)
            }
            <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}

export default NotesList;