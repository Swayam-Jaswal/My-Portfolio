import Project from "../models/Project.js";
import { uploadToS3 } from "../utils/uploadToS3.js";


export const uploadProjectImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const imageUrl = await uploadToS3(req.file, "projects");

  const project = await Project.findById(req.params.id);
  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  project.previewImage = imageUrl;
  await project.save();

  res.json({ previewImage: imageUrl });
};

export const getProjects = async (req, res) => {
  const projects = await Project.find({ isVisible: true }).sort({ order: 1 });
  res.json(projects);
};

export const createProject = async (req, res) => {
  const project = await Project.create(req.body);
  res.status(201).json(project);
};

export const updateProject = async (req, res) => {
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(project);
};

export const deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Project deleted" });
};
