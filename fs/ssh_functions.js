import fs from 'fs';

export async function addKeyToFile(key) {
  fs.appendFileSync(process.env.AUTHORIZED_KEY_FILE, key + '\n');
}
