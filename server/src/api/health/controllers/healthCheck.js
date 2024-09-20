import mongoose from 'mongoose';

export const healthCheck = (req, res) => {
  try {
    const dbStatus = mongoose.connection.readyState;

    // Log the status for debugging
    console.log("DB Connection Status:", dbStatus);

    // If connected (Mongoose connected state is 1)
    if (dbStatus === 1) {
      res.status(200).json({ status: 'Running', database: 'Connected' });
    } else {
      res.status(500).json({ status: 'FAIL', database: 'Disconnected' });
    }
  } catch (error) {
    console.error("Health check error:", error);
    res.status(500).json({ status: 'FAIL', error: 'Server or DB error' });
  }
};
