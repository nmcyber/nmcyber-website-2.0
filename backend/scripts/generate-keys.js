#!/usr/bin/env node

/**
 * Helper script to generate encryption keys for the downloadable resource service
 * Usage: node scripts/generate-keys.js
 */

const crypto = require('node:crypto');

console.log('\n Generating encryption keys for downloadable resource service...\n');

// Generate DOWNLOAD_TOKEN_SECRET (32+ characters, base64 encoded)
const downloadTokenSecret = crypto.randomBytes(32).toString('hex');
console.log('DOWNLOAD_TOKEN_SECRET:');
console.log(downloadTokenSecret);
console.log('');

console.log('Keys generated successfully!');
console.log('\n Copy these values to your .env file.\n');
