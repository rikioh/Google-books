import React, { Component } from 'react'
import API from '../../utils/API'
const axios = require('axios')



class BookCard extends Component {

    state = {
        data: []
    }

    constructor(props) {
        super(props)
        this.state = {props}
    }


    storeBook() {

        var data = {
            title: this.state.props.data.volumeInfo.title,
            author: this.state.props.data.volumeInfo.authors,
            description: this.state.props.data.volumeInfo.description,
            image: this.state.props.data.volumeInfo.imageLinks.thumbnail,
            link: this.state.props.data.volumeInfo.previewLink,
        }

        API.saveBook(data)
            .catch(err => console.log(err));

        return
    }

    render() {
        return (
            <div className='row'>
                <div className='card'>
                    <div className='card-header'>{this.props.data.volumeInfo.title}</div>
                    <div className='row g-0'>
                        <div className='col-md-3'>
                            <div className='row'>
                                <img className='img' src={this.props.data.volumeInfo.imageLinks.thumbnail}></img>
                            </div>
                            <a href={this.props.data.volumeInfo.previewLink} className="btn btn-primary m-1" target='_blank'>View on Google</a>
                            <button className='btn btn-primary' onClick={()=>this.storeBook()}>Save</button>
                        </div>
                        <div className='col-md-9'>
                            <div className='card-body'>
                                <h5 className='card-title'>Author(s): {this.props.data.volumeInfo.authors}</h5>
                                <div className='card-text'>{this.props.data.volumeInfo.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default BookCard