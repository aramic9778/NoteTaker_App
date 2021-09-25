import { MdDeleteForever, MdModeEdit } from 'react-icons/md'
import { useState, useEffect } from 'react';

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {

    const [editNote, setEditNote] = useState(false);
    const [noteText, setNoteText] = useState(text);
    const characterLimit = 200;
    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    }
    // useEffect(() => {
    //     setNoteText(text)
    // }, [noteText]);
    const handleSaveClick = (id) => {
        setEditNote(!editNote);
        handleEditNote(noteText, id);
    }

    const moveCaretAtEnd = (e) => {
        var temp_value = e.target.value
        e.target.value = ''
        e.target.value = temp_value
    }

    return <div>
        {
            editNote ? <div className="note">
                <textarea className="edit_textarea" rows='8' cols='10' onChange={handleChange} autoFocus value={noteText} onFocus={moveCaretAtEnd}> </textarea>
                <div className='note-footer'>
                    <small>{characterLimit - noteText.length} Remaining</small>
                    <button onClick={() => handleSaveClick(id)} className="save">Save</button>
                </div>
            </div>
                : <div className="note"> <span className="spanik">{text}</span>
                    <div className="note-footer">
                        <small>
                            {date}
                        </small>
                        <div>
                            <MdModeEdit onClick={() => setEditNote(!editNote)} className='edit-icon bounce' size='1.3em' />
                            <MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete-icon bounce' size='1.3em' />
                        </div>
                    </div>
                </div>
        }




    </div >
}
export default Note;