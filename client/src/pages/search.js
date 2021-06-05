import React, { useEffect, useState  } from 'react'
import BookCard from '../components/BookCard'
import { Input, FormBtn } from "../components/Form"
const axios = require('axios')

function Search() {

    const [books, stateBooks] = useState([])
    const [formObject, setFormObject] = useState({
        search: ""
      })

    useEffect(() => {
    }, [])

    function renderBooks(q_terms) {

        var base_url = `https://www.googleapis.com/books/v1/volumes?q=${q_terms}&maxResults=5&orderBy=relevance`

        axios.get(base_url)
            .then((res) => {
                stateBooks(res.data.items)
            })
            .catch(err => console.log(err))
    }

    let booksToRender;
    if (books) {
        booksToRender = books.map(book => {
        return <BookCard data={book}/>
        });
    } else {
        booksToRender = "Loading...";
    }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        renderBooks(formObject.search)
      };


    return (
        <div className='container'>
            <div className='row mt-3 mb-3'>

                <Input
                    onChange={handleInputChange}
                    name="search"
                    placeholder="Seach Term"
                    value={formObject.search}
                />
                <FormBtn
                    disabled={!(formObject.search)}
                    onClick={handleFormSubmit}
                >
                    Submit Book
                </FormBtn>

            </div>
            <h1>Books</h1>
            {booksToRender}
        </div>
    )
}

export default Search