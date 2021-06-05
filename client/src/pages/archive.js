import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import BookCard from '../components/bookArchive'

function Saved() {

    const [books, stateBooks] = useState([])

    useEffect(() => {
        API.retrieveBooks()
            .then(res => {
                stateBooks(res.data)
                console.log(res.data);
            })
            .then(() => console.log(books))
            .catch(err => console.log(err))

        stateBooks([1, 2, 3])

    }, [])

    return (
        <div>
            <h1>This book has been saved</h1>
            {books.map(book => (
                <BookCard data={book}/>
            ))}
        </div>
    )
}

export default Saved