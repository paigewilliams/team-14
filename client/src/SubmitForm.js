import React, { Component } from 'react';
import Tags from './Tags.js';
import './formStyles.css';
import { Link } from 'react-router-dom'; 

class SubmitForm extends Component {

  state = {
    title: '',
    textBody: '',
    tags: ''
  }

  // handleSubmit = event => {
  //   event.preventDefault();

  // }
  render() {
    return (
      <div>
        <h2>Create a post</h2>
        <form onSubmit={this.handleSubmit}>
        <label>
          <h4>Title</h4>
          <input className="input"type="text"/>
        </label>
        <label>
          <h4>Body</h4>
          <textarea className="input"></textarea>
        </label>
        <label>
          <h4>Tags</h4>
          <Tags/>
          
        </label>
        <button><Link to="/">Submit</Link></button>
        </form>
      </div>
    )
  }
}

export default SubmitForm;