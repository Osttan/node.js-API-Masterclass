import express from 'express';
import {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} from '../controllers/bootcamps.js';

const router = express.Router();

router.route('/').get(getBootcamps).post(createBootcamp);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

// router.get('/', (req, res) => {
//   res.status(200).json({ sucess: true, msg: 'Show all bootcamps' });
// });

// router.get('/:id', (req, res) => {
//   res.status(200).json({ sucess: true, msg: `Show bootcamp ${req.params.id}` });
// });

// router.post('/', (req, res) => {
//   res.status(200).json({ sucess: true, msg: 'Create new bootcamp' });
// });

// router.put('/:id', (req, res) => {
//   res
//     .status(200)
//     .json({ sucess: true, msg: `Update bootcamp ${req.params.id}` });
// });

// router.delete('/:id', (req, res) => {
//   res
//     .status(200)
//     .json({ sucess: true, msg: `Delete bootcamp ${req.params.id}` });
// });

export { router };
