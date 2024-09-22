import { Router } from "express";
import { doSignup } from "../../api/authentication/controllers/doSignup.js";
import { doLogout } from "../../api/authentication/controllers/doLogout.js";
import { doLogin } from "../../api/authentication/controllers/doLogin.js";
import { getSession } from "../../api/authentication/controllers/getSession.js";

const router = Router();

// Routes
router.post("/signup", doSignup);
router.post("/login", doLogin);
router.post("/logout", doLogout);
router.get('/api/session', getSession)

export default router;
