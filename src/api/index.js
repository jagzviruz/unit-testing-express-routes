import express from 'express';
import { listUsers } from './users';
const router = express.Router();

router.get('/all', listUsers)

export default router;
