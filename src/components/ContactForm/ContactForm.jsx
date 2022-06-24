import React, { Component } from 'react'
import './ContactForm.css'
import { nanoid } from 'nanoid'


class Form extends Component {
state = {
    name: '',
    number: ''
   
}
    
nameId = nanoid(10)
    
handleInputChange = e => {
  this.setState({[e.currentTarget.name]: e.currentTarget.value})
}
  
  handleSubmit = e => {
      e.preventDefault();
      const { name, number } = this.state;
    this.props.onSubmit({id: nanoid(5), name, number})
      this.reset()
    }    
    
    reset = () => {
        this.setState({name: '', number: ''})
    }


    render() {
     const { name, number } = this.state;
        const { handleInputChange, handleSubmit } = this;
        
       
        return (
        <form onSubmit={handleSubmit}>
        <label htmlFor={this.nameId}> Name
            <input
  onChange={handleInputChange}
  id={this.nameId}
  value={name}                  
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required />     
   Number
            <input
    onChange={handleInputChange}
    value={number}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
            </label>
             <button className="btn-form" type="submit">Add contact</button>
            </form>
    )
    }
}

export default Form