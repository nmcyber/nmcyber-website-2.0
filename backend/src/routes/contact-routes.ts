// Contact API routes
import { Router } from 'express';
import { submitContact } from '../controllers/contact-controller';

const router = Router();

router.post('/contact', submitContact);

export { router as contactRouter };
