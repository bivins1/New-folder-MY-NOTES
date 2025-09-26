"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiPlus, FiTrash2, FiFolder } from "react-icons/fi";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseconfig";
import { FaRegTrashCan } from "react-icons/fa6";
import { addDoc } from "firebase/firestore";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";


function MyNotes() {
    const { data: session } = useSession();
      console.log("Session:", session);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    const fetchNotes = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "Mynotes"));
            const notesArray = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setNotes(notesArray);
        } catch (error) {
            console.error("Error fetching notes:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchNotes(); }, []);

    const handleDelete = async (id) => {
        try {
            const noteSnap = await getDoc(doc(db, "Mynotes", id));

            if (!noteSnap.exists()) {
                alert("Note does not exist");
            }
            const noteData = noteSnap.data();
            console.log(noteData);

            

            const Trashref = await addDoc(collection(db, "Trash"), { ...noteData });
            await deleteDoc(doc(db, "Mynotes", id));
            fetchNotes(); // Refresh notes list after deletion
            alert("Note moved to Trash");


        } catch (error) {
            console.error("Error deleting note:", error);
        }
    }


    
  const handleCancel = () => {
    setMenuOpen(false);
  }


  const handleCancel2 =() => {
    setDisplay(!display);
    setMenuOpen(false);
  }


    return (
        <div className="min-h-screen flex bg-gray-50">
            {/* Sidebar */}
            <aside className={`bg-amber-50 text-gray-800 w-64 p-6 fixed md:static inset-y-0 left-0 z-50 
        transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col justify-between`}>

                <div>
                    <h2 className="text-3xl font-bold mb-8 text-amber-500 ml-4">MY NOTES</h2>
                    <div className="space-y-4 flex flex-col">
                        <Link href="/createnotes">
                            <button onClick={handleCancel2} className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition"> <FiPlus /> Create Notes </button>
                        </Link>
                        <Link href="/Trash">
                            <button onClick={handleCancel} className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition"> <FiTrash2 /> Trash </button>
                        </Link>
                        <Link href="/my-notes">
                            <button onClick={handleCancel} className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition"> <FiFolder /> My Notes </button>
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Notes List */}
            <div className="flex-1 p-6 w-full">
                {loading ? (
                    <p className="text-gray-500 text-4xl">Loading notes...</p>
                ) : notes.length === 0 ? (
                    <p className="text-gray-500">No notes yet. Click "Create Notes" to add one!</p>
                ) : (
                    notes.map(note => (
                        <div
                            key={note.id}
                            className="border p-4 mb-4 rounded-lg shadow bg-amber-50 flex flex-col justify-start"
                        >   <p className="text-gray-400 text-xs mb-1">Created by: {note.userId}</p>
                            <p className="text-gray-400 text-xs mb-1">
                                {note.timestamp?.toDate().toLocaleString()}
                            </p>
                            <h2 className="text-xl font-semibold">{note.title}</h2>
                            <p className="text-gray-800">{note.note}</p >
                            <span className="flex justify-end mt-2 text-gray-600 hover:text-red-600 cursor-pointer">
                                {
                                    note.userId === session.user.email ?
                                        <button onClick={() => handleDelete(note.id)}>
                                            <FaRegTrashCan />
                                        </button> : null
                                }
                            </span>
                        </div>
                    ))
                )}
            </div>

            {/* Hamburger menu */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="absolute top-4 left-4 md:hidden text-2xl text-amber-500">
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>
        </div>
    );
}

export default MyNotes;
