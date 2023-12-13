import { NoteKeeper  } from "../firebase-config";       //DB
import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";        //CRUD functions

const notesCollection = collection(NoteKeeper , "notes");       //notes collection in DB

class noteCRUDservices {
    // create
    postNote = (noteObj) => {
        return addDoc(notesCollection, noteObj);
    }

    //read
    getNote = (noteId) => {
        const noteDoc = doc(NoteKeeper , "notes", noteId);      //to fetch note document of given id
        return getDoc(noteDoc);
    }

    // update
    updateNote = (noteId, updatedNoteObj) => {
        const noteDoc = doc(NoteKeeper , "notes", noteId);      //to fetch note document of given id
        return updateDoc(noteDoc, updatedNoteObj);
    }

    //delete
    deleteNote = (noteId) => {
        const noteDoc = doc(NoteKeeper , "notes", noteId);      //fetch note doc with given id
        return deleteDoc(noteDoc)
    }

    //fetch all notes
    getAllNotes = () => {
        return getDocs(notesCollection);
    }
}

export default new noteCRUDservices();