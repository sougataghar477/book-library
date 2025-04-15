"use client";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
export default function SearchBooks() {
    let [searchInput, setSearchInput] = useState("");
    let [searchedResults, setSearchedResults] = useState(null);
    function search(e) {
        e.preventDefault();
        fetch("http://localhost:3000/api/search?q=" + searchInput)
            .then((r) => r.json())
            .then((c) => setSearchedResults(c.books))
            .catch((err) => toast.error("Network Error"));
    }
    return (
        <>
            <form className="w-80 text-white" onSubmit={search}>
                <ToastContainer />
                <h1 className="text-4xl text-center mb-4">Search Books</h1>
                <div className="flex">
                    <input
                        placeholder="Type & press enter to search"
                        required={true}
                        onInput={(e) => {
                            setSearchInput(e.target.value);
                            e.target.value === "" ? setSearchedResults(null) : null;
                        }}
                        value={searchInput}
                        className="border border-white p-2 w-full rounded-lg outline-0 rounded-r-none"
                        type="text"
                    />
                    <button
                        className="bg-[#003153] p-2 border-2 border-[#003153] rounded-lg rounded-l-none"
                        type="submit"
                    >
                        Search
                    </button>
                </div>
                {
                    <div>
                        <ul className="">
                            {searchedResults?.map((book) => (
                                <Link key={book.id} href={"/books/" + book.id}>
                                    <li className="italic transition-all duration-250 hover:bg-gray-600 p-4 border border-white">
                                        {book.title} by {book.author}
                                    </li>
                                </Link>
                            ))}
                            {searchInput.length > 0 && searchedResults?.length === 0 ? (
                                <p className="border border-white p-4">No Results Found</p>
                            ) : null}
                        </ul>
                    </div>
                }
            </form>
        </>
    );
}
