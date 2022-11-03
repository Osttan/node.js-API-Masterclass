import { ErrorResponse } from '../utils/errorResponse.js';
import { Bootcamp } from '../models/Bootcamp.js';
import { asyncHandler } from '../middleware/async.js';

// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
export async function getBootcamps(req, res, next) {
  // asyncHandler(req, res, next);
  const bootcamps = await Bootcamp.find();

  res
    .status(200)
    .json({ success: true, count: bootcamps.length, data: bootcamps });
}

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
export async function getBootcamp(req, res, next) {
  asyncHandler(req, res, next);
  const bootcamp = await Bootcamp.findById(req.params.id);

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: bootcamp });
}

// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private
export async function createBootcamp(req, res, next) {
  asyncHandler(req, res, next);

  const bootcamp = await Bootcamp.create(req.body);

  res.status(201).json({
    success: true,
    data: bootcamp,
  });
}

// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
export async function updateBootcamp(req, res, next) {
  asyncHandler(req, res, next);

  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: bootcamp });
}

// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
export async function deleteBootcamp(req, res, next) {
  asyncHandler(req, res, next);

  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: {} });
}
