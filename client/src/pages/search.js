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

    function renderBooks(query) {

        var base_url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5&orderBy=relevance`

        axios.get(base_url)
            .then((res) => {
                stateBooks(res.data.items)
            })
            .catch(err => console.log(err))
    }

    let bookstoLoad;
    if (books) {
        bookstoLoad = books.map(book => {
        return <BookCard data={book}/>
        });
    } else {
        bookstoLoad = "Rendering books";
    }


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
                    Search Book Title in Google
                </FormBtn>

            </div>
            <h1>List of matching items</h1>
            {bookstoLoad}
        </div>
    )
}

export default Search