import Skill from "../models/Skill.js";

/**
 * PUBLIC
 * Get all skills
 */
export const getSkills = async (req, res) => {
  const skills = await Skill.find().sort({ order: 1 });
  res.json(skills);
};

/**
 * ADMIN
 * Create skill
 */
export const createSkill = async (req, res) => {
  const skill = await Skill.create(req.body);
  res.status(201).json(skill);
};

/**
 * ADMIN
 * Update skill
 */
export const updateSkill = async (req, res) => {
  const skill = await Skill.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(skill);
};

/**
 * ADMIN
 * Delete skill
 */
export const deleteSkill = async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.json({ message: "Skill deleted" });
};
