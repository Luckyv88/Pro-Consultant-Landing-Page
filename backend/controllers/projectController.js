const Project = require('../models/Project')

exports.addProject = async (req, res) => {
  const project = new Project(req.body)
  await project.save()
  res.status(201).json(project)
}

exports.getProjects = async (req, res) => {
  const projects = await Project.find()
  res.json(projects)
}
