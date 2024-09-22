import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Set storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = './uploads/images/';
        // Create directory if it doesn't exist
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Init upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }, // Limit to 1MB
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Error: Images Only!')); // Pass the error to callback
        }
    }
}).single('image'); // Ensure this matches the field name in your form

export const uploadFiles = (req, res) => {
    console.log("HIT"); // Confirm the endpoint is hit

    upload(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: err.message }); // Provide the error message
        }
        if (!req.file) {
            return res.status(400).json({ message: 'No file selected!' });
        }

        // Construct the URL for the uploaded image
        const imageUrl = `http://localhost:8080/uploads/images/${req.file.filename}`;

        // Return the image URL
        res.json({ imageUrl });
    });
};
