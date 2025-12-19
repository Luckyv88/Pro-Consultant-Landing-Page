import axios from 'axios'

const ProjectForm = () => {
  const submitHandler = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    await axios.post('https://pro-consultant-landing-page-backend.onrender.com/api/projects', data)
    alert('Project Added')
  }

  return (
    <form className="admin-card" onSubmit={submitHandler}>
      <h3>Add Project</h3>
      <input name="name" placeholder="Project Name" />
      <input name="description" placeholder="Description" />
      <input type="file" name="image" />
      <button>Add</button>
    </form>
  )
}

export default ProjectForm
