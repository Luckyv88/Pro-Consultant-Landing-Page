import { useEffect, useState } from 'react'
import axios from 'axios'

const SubscriberList = () => {
  const [subs, setSubs] = useState([])

  useEffect(() => {
    axios.get('https://pro-consultant-landing-page-backend.onrender.com/api/subscribers')
      .then(res => setSubs(res.data))
  }, [])

  return (
    <div className="admin-card">
      <h3>Subscribed Emails</h3>
      {subs.map(s => (
        <p key={s._id}>{s.email}</p>
      ))}
    </div>
  )
}

export default SubscriberList
