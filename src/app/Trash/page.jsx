"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../config/firebaseconfig';
import { doc, deleteDoc } from "firebase/firestore";
import { FiMenu, FiX, FiTrash2, FiFolder, FiPlus } from 'react-icons/fi';
import Link from 'next/link';
import { FaRegTrashCan } from 'react-icons/fa6';
import { useSession } from 'next-auth/react';

const Trash = () => {

    const { data: session } = useSession();

    const [menuOpen, setMenuOpen] = useState(false);
    const [trashNotes, setTrashNotes] = useState([]);


    const fetchTrashNotes = async () => {
        try {
            // Fetch notes from Trash collection
            const querySnapshot = await getDocs(collection(db, "Trash"));
            const notesArray = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setTrashNotes(notesArray);
        } catch (error) {
            console.error("Error fetching notes: ", error);
        }
    }

    const handleDeleteForever = async (id) => {
        try {
            alert("Press OK to delete note permanently irreversibly. If not sure, tap the screen anywhere to cancel.")
            await deleteDoc(doc(db, "Trash", id));
            setTrashNotes(trashNotes.filter(note => note.id !== id));
        } catch (error) {
            console.error("Error deleting note:", error);
        }
    }

    const handleCancel = () => {
        setMenuOpen(false);
    }


    



    useEffect(() => { fetchTrashNotes(); }, []);
    return (
        <div className="min-h-screen flex bg-gray-50" >
            <aside
                className={`bg-amber-50 text-gray-800 w-64 p-6 fixed md:static inset-y-0 left-0 z-50 
            transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} 
            md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col justify-between`}
            >
                <div>
                    <h2 className="text-3xl font-bold mb-8 text-amber-500 ml-4">MY NOTES</h2>
                    <div className="space-y-4 flex flex-col">
                        <Link href="/createnotes">
                            <button onClick={handleCancel} className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition"> <FiPlus /> Create Notes </button>
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


            <div className="flex-1 p-6 w-full">
                {trashNotes.length === 0 ? (
                    <p className="text-gray-500 text-4xl">Trash is empty</p>
                ) : (                    
                    trashNotes.map(note => (
                        <div key={note.id} className="rounded shadow-md flex flex-col p-4 justify-start">
                            <h2 className="text-2xl font-bold mb-2">{note.title}</h2>
                            <p className="text-gray-800">{note.note}</p>
                            <span className="flex justify-end mt-2 text-gray-600 hover:text-red-600 cursor-pointer">
                                {
                                    note.userId === session.user.email ?
                                        <button onClick={() => handleDeleteForever(note.id)}>
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
    )
}

export default Trash