import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ImageInput from './utils/ImageUtils';
import serializeForm from 'form-serialize'

export default class CreateContact extends Component {
    handleSubmit = (e)=>{
        e.preventDefault()
        const values = serializeForm(e.target,
            {hash : true})
console.log(values)
            if(this.props.onCreateContact){
                this.props.onCreateContact(values)
            }
    }
    render() {
        return (
            <div>
               <Link
               className='close-create-contact'
               to='/'
               >
                   close
               </Link>
               <form className='create-contact-avatar-input' onSubmit={this.handleSubmit}>
                   <ImageInput 
                   className='create-contact-avatar-input'
                   name='avatarUrl'
                   maxHeight={64}
                   />
                   <div className='create-contact-details'>
                    <input type='text' name='name' placeholder='Name'/>
                    <input type='text' name ='handle' placeholder='Handle'/>
                  <button>Add Contact</button>
                  </div>
               </form>
            </div>
        )
    }
}
