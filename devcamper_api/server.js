import express from 'express';
import dotenv from 'dotenv';
// import { logger } from './middleware/logger.js';
import morgan from 'morgan';
import colors from 'colors';
import { errorHandler } from './middleware/error.js';
import { connectDB } from './config/db.js';
import { router } from './routes/bootcamps.js';

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Dev loggind middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// app.use(logger);

// Mount bootcamps
app.use('/api/v1/bootcamps', router);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => {
    process.exit(1);
  });
});
