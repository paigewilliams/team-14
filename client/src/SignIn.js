import React, { Component } from 'react';
import './App.css';
import isEmail from 'validator/lib/isEmail';

import ListItem from './ListItem.js';

class SignIn extends Component {
  // add validation 
  // title
  // language
  // age

  state = {
    fields: {
      name: '',
      email: '',
      language: '',
    },
    fieldErrors: {},
    people: [],
  };

  onFormSubmit = (evt) => {
    const people = [...this.state.people];
    const person = this.state.fields;
    const fieldErrors = this.validate(person);
    this.setState({ fieldErrors });
    evt.preventDefault();

    if (Object.keys(fieldErrors).length) return;

    this.setState({
      people: people.concat(person),
      fields: {
        name: '',
        email: '',
        language: ''
      },
    });
  };

  onInputChange = (evt) => {
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields });
  };

  validate = (person) => {
    const errors = {};
    if (!person.name) errors.name = 'Name Required';
    if (!person.email) errors.email = 'Email Required';
    if (!person.language) errors.language = 'language required/se requiere idioma';    
    if (person.email && !isEmail(person.email)) errors.email = 'Invalid Email';
    return errors;
  };
  render() {
    return (
      <div>
        <h1>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>

          <input
            placeholder='Name'
            name='name'
            value={this.state.fields.name}
            onChange={this.onInputChange}
          />

          <span style={{ color: 'red' }}>{this.state.fieldErrors.name}</span>

          <br />

          <input
            placeholder='Email'
            name='email'
            value={this.state.fields.email}
            onChange={this.onInputChange}
          />

          <span style={{ color: 'red' }}>{this.state.fieldErrors.email}</span>

          <br />

          
            <label for="t1">Language options/Selecciona su idioma<abbr title="This field is mandatory">*</abbr></label>
            <input type="text" id="t1" name="language" list="l1" required
                  pattern="[Ee]nglish|[Es]panol|[Oo]ther"/>
            <datalist id="l1">
              <option>English</option>
              <option>Espanol</option>
              <option>Other</option>
            </datalist>
          

          <input type='submit' />
        </form>

        <div>
          <h3>People</h3>
          <ul>
            {this.state.people.map(({ name, email, language }, i) =>
              <li key={i}>{name} ({email}) {language}</li>
            )}
          </ul>
        </div>
        {/*}
        <h1>Sign In</h1>
        <form id="#signInForm">
          <p>
            <fieldset>
              <legend>Title<abbr title="This field is mandatory">*</abbr></legend>
              <input type="radio" required name="title" id="r1" value="Mr"/><label for="r1">Mr.</label>
              <input type="radio" required name="title" id="r2" value="Ms"/><label for="r2">Ms.</label>
            </fieldset>
          </p>
          <p>
            <label for="n1">How old are you?</label>
            <input type="number" min="12" max="120" step="1" id="n1" name="age" pattern="\d+"/>
          </p>
          <p>
            <label for="t1">What's your favorite fruit?<abbr title="This field is mandatory">*</abbr></label>
            <input type="text" id="t1" name="fruit" list="l1" required
                  pattern="[Bb]anana|[Cc]herry|[Aa]pple|[Ss]trawberry|[Ll]emon|[Oo]range"/>
            <datalist id="l1">
              <option>Banana</option>
              <option>Cherry</option>
              <option>Apple</option>
              <option>Strawberry</option>
              <option>Lemon</option>
              <option>Orange</option>
            </datalist>
          </p>
          <p>
            <label for="t2">What's your e-mail?</label>
            <input type="email" id="t2" name="email"/>>
          </p>
          <p>
            <label for="t3">Leave a short message</label>
            <textarea id="t3" name="msg" maxlength="140" rows="5"></textarea>
          </p>
          <p>
            <button>Submit</button>
          </p>
        </form>
    */}
      </div>
    );
  }
}

export default SignIn;

// random