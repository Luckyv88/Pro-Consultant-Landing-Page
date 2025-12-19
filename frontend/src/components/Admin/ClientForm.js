import axios from 'axios'

const ClientForm = () => {
  const submitHandler = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    await axios.post('http://localhost:5000/api/clients', data)
    alert('Client Added')
  }

  return (
    <form className="admin-card" onSubmit={submitHandler}>
      <h3>Add Client</h3>
      <input name="name" placeholder="Client Name" />
      <input name="designation" placeholder="Designation" />
      <input name="description" placeholder="Description" />
      <input type="file" name="image" />
      <button>Add</button>
    </form>
  )
}

export default ClientForm
