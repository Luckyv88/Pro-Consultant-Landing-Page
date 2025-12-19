import { useEffect, useState } from 'react'
import axios from 'axios'

const ContactList = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    axios.get('https://pro-consultant-landing-page-backend.onrender.com/api/contact')
      .then(res => setContacts(res.data))
  }, [])

  return (
    <div className="admin-card">
      <h3>Contact Details</h3>
      {contacts.map(c => (
        <p key={c._id}>{c.fullName} - {c.email}</p>
      ))}
    </div>
  )
}

export default ContactList
