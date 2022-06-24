import './ContactList.css'
import PropTypes from 'prop-types'


const ContactList = ({ contacts, onDeleteContact }) => {
    return (
    <ul>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className='list-contacts'>
                <p>{name}: {number}</p>
                <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
))}

        </ul>
    )
}


export default ContactList

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}