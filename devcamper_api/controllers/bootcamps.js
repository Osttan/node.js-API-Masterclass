import { Bootcamp } from '../models/Bootcamp.js';

// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
export async function getBootcamps(req, res, next) {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({ success: true, data: bootcamps });
  } catch (err) {
    res.status(400).json({ success: false });
  }
}

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
export async function getBootcamp(req, res, next) {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false });
  }
}

// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private
export async function createBootcamp(req, res, next) {
  try {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
}

// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
export function updateBootcamp(req, res, next) {
  res
    .status(200)
    .json({ sucess: true, msg: `Update bootcamp ${req.params.id}` });
}

// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
export function deleteBootcamp(req, res, next) {
  res
    .status(200)
    .json({ sucess: true, msg: `Delete bootcamp ${req.params.id}` });
}
