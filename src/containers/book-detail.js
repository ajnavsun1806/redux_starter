import React, { Component } from 'react';
import { connect } from 'react-redux';
import bookList from './book-list';

class BookDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const book = this.props.activeBook;
        if(!book){
            return (
                <div className='col-sm-8'>
                    <div><b>No Book Selected</b></div>
                    <div></div>
                </div>
            )
        }
        return (
            <div className='col-sm-8'>
                <div><b>{book.title}</b></div>
                <div>Author : {book.author}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        activeBook: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);
