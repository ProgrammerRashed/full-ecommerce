
import { Router } from "express";
import { uploadFiles } from "../../api/upload/controllers/uploadFiles.js";

const router = Router();


router.post('/upload', uploadFiles);


export default router;
