import React, { useReducer } from 'react'
import uuid from 'uuid'
import contactContext from './contactContext'
import contactReducer from './contactReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'dia',
                email: 'dia@gamil.com',
                phone: '111-111-1111',
                type: 'professional'
            },
            {
                id: 2,
                name: 'jack',
                email: 'jack@gamil.com',
                phone: '111-111-1112',
                type: 'professional'
            },
            {
                id: 3,
                name: 'Spintu',
                email: 'spintuh@gamil.com',
                phone: '111-111-1113',
                type: 'professional'
            }
        ]
    }
    const [state, dispatch] = useReducer(contactReducer, initialState)

    //Add contact

    //delete contact


    //set current contacts


    //Clear Current contacts


    //Update contacts 

    //filter contacts

    //clear filter
    return (
        <contactContext.provider
            value={{
                contacts: state.contacts
            }}
        >
            {props.children}
        </contactContext.provider>
    )
}
export default ContactState;