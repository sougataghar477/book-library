'use client';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
export default function AddBook(){
    let [title,setTitle]=useState('');
    let [author,setAuthor]=useState('');
 
    let handleBookSubmit = (e)=>{
        e.preventDefault();
        fetch('http://localhost:3000/api/addBook', {
            method: "POST",
            body: JSON.stringify({ title,author})
          })
          .then(a => a.json())
          .then( b =>  toast(b.message))
          .catch(err=> toast(b.message))
    }
    return <form onSubmit={handleBookSubmit} className="text-white w-80">
        <div className="mb-4">
            <label htmlFor='name'>Name of the book</label>
            <input 
            value={title} 
            onInput={e=> setTitle(e.target.value)} 
            className="mt-2 block border border-white p-2 w-full  outline-0" 
            type="text" 
            id="name"/>
        </div>
        <div className="mb-4">
            <label htmlFor='author'>Author</label>
            <input 
            value={author} 
            onInput={e => setAuthor(e.target.value)} 
            className="mt-2 block border border-white p-2 w-full  outline-0" 
            type="text" 
            id="author"/>
        </div>
        <button className="bg-[#003153] p-2 border-2 border-[#003153] w-full" type="submit">Add Book</button>
        <ToastContainer />
    </form>
}