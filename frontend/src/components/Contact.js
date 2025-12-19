import React, { useState } from 'react'
import axios from 'axios'
import '../styles/contact.css'

const Contact = () => {
  const [form, setForm] = useState({})

  const submitHandler = e => {
    e.preventDefault()
    axios.post('https://pro-consultant-landing-page-backend.onrender.com/api/contact', form)
      .then(() => alert('Submitted'))
  }

  return (
    <form className="hero-form" onSubmit={submitHandler}>
      <input
        placeholder="Full Name"
        onChange={e => setForm({ ...form, fullName: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })}
      />

      <input
        placeholder="Mobile"
        onChange={e => setForm({ ...form, mobile: e.target.value })}
      />

      <input
        placeholder="City"
        onChange={e => setForm({ ...form, city: e.target.value })}
      />

      <button>Get Started Now</button>
    </form>
  )
}

export default Contact
