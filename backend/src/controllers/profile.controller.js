import Profile from "../models/Profile.js";


export const getProfile = async (req, res) => {
  const profile = await Profile.findOne();
  res.json(profile);
};

export const upsertProfile = async (req, res) => {
  const existingProfile = await Profile.findOne();

  if (existingProfile) {
    const updatedProfile = await Profile.findByIdAndUpdate(
      existingProfile._id,
      req.body,
      { new: true }
    );
    return res.json(updatedProfile);
  }

  const newProfile = await Profile.create(req.body);
  res.status(201).json(newProfile);
};
