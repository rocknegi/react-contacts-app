import React, { Component } from 'react'
import propTypes from 'prop-types'


class ListContacts extends Component {

    state = {
        querry: ''
    }
    search = (data) => {
        this.setState({ querry: data.trim() })
    }
    clearQuery = ()=>{
        this.search('')
    }
    render() {
        const { querry } = this.state
        const { contacts, onDelete } = this.props

        const showingContacts = querry === ''
            ? contacts
            : contacts.filter(e => (
                e.name.toLowerCase().includes(querry.toLowerCase())
            ))

        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='Search Contacts'
                        value={querry}
                        onChange={(event) => this.search(event.target.value)}
                    />
                </div>
                {showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                        showing {showingContacts.length} of {contacts.length} contacts 
                        <button onClick={this.clearQuery}>Clear All</button>
                        </div>
                )}
                <ol className='contact-list'>
                    {showingContacts.map(contacts => (
                        <li key={contacts.id} className='contact-list-item' >
                            <div
                                className='contact-avatar'
                                style={{
                                    backgroundImage: `url(${contacts.avatarURL})`
                                }}
                            >

                            </div>
                            <div className='contact-details'>
                                <p>{contacts.name}</p>
                                <p>{contacts.handle}</p>
                            </div>
                            <button className='contact-remove' onClick={() => onDelete(contacts)}>
                                Remove
                        </button>
                        </li>
                    ))}
                </ol>

            </div>
        )
    }
}

ListContacts.propTypes = {
    contacts: propTypes.array.isRequired,
    onDelete: propTypes.func.isRequired
}

export default ListContacts