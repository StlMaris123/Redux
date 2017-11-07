import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
            return(
              <li key={book.title} className="list-group-item">{book.title}</li>
            );
        })
    }
}

export default class BookList extends Component{
    render(){
        return(
         <ul className="list-group col-sm-4">
	    //reference to a js function
            {this.renderList()}
         <ul>
        )
    }
}

function mapStateToProps(state){
    return {
        books: state.books
    }
}
