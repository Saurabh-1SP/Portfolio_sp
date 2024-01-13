import express from 'express';

import createMessage from '../controller/message.js'

const router = express.Router();

router.route('/').post(createMessage);

export default router;