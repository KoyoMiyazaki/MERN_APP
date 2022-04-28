import mongoose from "mongoose";
import TravelLog from "../models/travelLog.js";

export const getAllTravelLogs = async (req, res) => {
  try {
    const travelLogs = await TravelLog.find();
    res.status(200).json(travelLogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTravelLog = async (req, res) => {
  const postData = req.body;
  const newTravelLog = new TravelLog(postData);

  try {
    await newTravelLog.save();

    res.status(201).json(newTravelLog);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getSingleTravelLog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Not Found");
  }

  try {
    const travelLog = await TravelLog.findById(id);
    res.status(200).json(travelLog);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateTravelLog = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Not Found");
  }

  try {
    const updatedTravelLog = await TravelLog.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    res.status(200).json(updatedTravelLog);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteTravelLog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Not Found");
  }

  try {
    await TravelLog.findByIdAndRemove(id);

    res.status(200).json({ message: "Travel Log deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
