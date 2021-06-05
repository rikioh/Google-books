import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import buttonDelete from "../components/buttonDelete";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextField, buttonForm } from "../components/Form";

function Books() {

  const [books, stateBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    renderBooks()
  }, [])

  function renderBooks() {
    API.retrieveBooks()
      .then(res => 
        stateBooks(res.data)
      )
      .catch(err => console.log(err));
  };


    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add a books information.</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={() => {}}
                name="title"
                placeholder="Title (needed)"
              />
              <Input
                onChange={() => {}}
                name="author"
                placeholder="Author (needed)"
              />
              <Input
                onChange={() => {}}
                name="link"
                placeholder="Link"
              />
              <Input
                onChange={() => {}}
                name="image"
                placeholder="Img"
              />
              <TextField
                onChange={() => {}}
                name="description"
                placeholder="Description"
              />
              
              <buttonForm
                disabled={!(formObject.author && formObject.title)}
                onClick={() => {}}
              >
                Submit Book
              </buttonForm>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {books.length ? (
              <List>
                {books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={`/books/${book._id}`}>
                        <strong>
                          {book.title} written by {book.author}
                        </strong>
                      </a>
                      <buttonDelete onClick={() =>{}} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>There are zero results</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Books;
