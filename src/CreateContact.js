import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import ImageInput from './utils/ImageUtils';

export default class CreateContact extends Component {
    render() {
        return (
            <div>
               <Link
               className='close-create-contact'
               to='/'
               >
                   close
               </Link>
               <form className='create-contact-avatar-input'>
                   <ImageInput 
                   className='create-contact-avatar-input'
                   name='avatarUrl'
                   maxHeight={64}
                   />
                   <div className='create-contact-details'>
                    <input type='text name='name placeholder='Name'/>
                    <input type='text' name ='handle' placeholder='Handle'/>
                  <button>Add Contact</button>
                  </div>
               </form>
            </div>
        )
    }
}
