import { config } from 'dotenv';
import { safeParseNumber } from './utils';

config();

export const SERVER_PORT = safeParseNumber(process.env.SERVER_PORT) ?? 3000;
