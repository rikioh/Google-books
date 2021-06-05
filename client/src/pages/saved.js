import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import BookCard from '../components/SavedBook'

function Saved() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        API.getBooks()
            .then(res => {
                setBooks(res.data)
                console.log(res.data);
            })
            .then(() => console.log(books))
            .catch(err => console.log(err))

        setBooks([1, 2, 3])

    }, [])

    return (
        <div>
            <h1>Saved</h1>
            {books.map(book => (
                <BookCard data={book}/>
            ))}
        </div>
    )
}

export default Saved