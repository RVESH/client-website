import Database from 'better-sqlite3';
import { env } from './env.js';
import { mkdirSync } from 'fs';
import { dirname } from 'path';

mkdirSync(dirname(env.dbPath), { recursive: true });

export const db = new Database(env.dbPath);

db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT,
    name TEXT,
    status TEXT DEFAULT 'pending',
    created_at INTEGER DEFAULT (unixepoch()),
    updated_at INTEGER DEFAULT (unixepoch())
  );

  CREATE TABLE IF NOT EXISTS otp_codes (
    id TEXT PRIMARY KEY,
    email TEXT NOT NULL,
    purpose TEXT NOT NULL,
    otp_hash TEXT NOT NULL,
    attempts INTEGER DEFAULT 0,
    resend_count INTEGER DEFAULT 0,
    last_sent_at INTEGER DEFAULT (unixepoch()),
    expires_at INTEGER NOT NULL,
    verified INTEGER DEFAULT 0,
    ip_address TEXT,
    created_at INTEGER DEFAULT (unixepoch())
  );

  CREATE INDEX IF NOT EXISTS idx_otp_email_purpose 
    ON otp_codes(email, purpose);
`);

console.log('✅ Database ready');