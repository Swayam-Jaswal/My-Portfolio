import Contact from "../models/Contact.js";

/**
 * PUBLIC
 * Save contact message
 */
export const createContact = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields required" });
  }

  await Contact.create({ name, email, message });
  res.status(201).json({ message: "Message sent successfully" });
};

/**
 * ADMIN
 * Get all messages
 */
export const getContacts = async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json(contacts);
};
