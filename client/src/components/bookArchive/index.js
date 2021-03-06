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

    removeFromList(id) {

        console.log(this.props.data._id);
        API.removeFromList(this.props.data._id)
            .then(window.location.reload())
            .catch(err => console.log(err))

        
    }

    render() {
        return (
            <div className='row'>
                <div className='card'>
                    <div className='card-header'>{this.props.data.title}</div>
                    <div className='row g-0'>
                        <div className='col-md-3'>
                            <div className='row'>
                                <img className='image' src={this.props.data.img}></img>
                            </div>
                            <a href={this.props.data.link} className="btn btn-primary m-1" target='_blank'>Check out this book some more</a>
                            <button type='submit' className='btn btn-primary' onClick={()=>this.removeFromList()}>Delete the saved book</button>
                        </div>
                        <div className='col-md-9'>
                            <div className='card-body'>
                                <h5 className='card-title'>Author: {this.props.data.author}</h5>
                                <div className='card-text'>{this.props.data.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default BookCard