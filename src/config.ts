import { config } from 'dotenv';
import { safeParseNumber } from './utils';

config();

export const PORT = safeParseNumber(process.env.PORT) ?? 3000;
