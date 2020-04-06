import fs from 'fs';

export async function addKeyToFile(key) {
  fs.appendFileSync(`${process.env.AUTHORIZED_KEYS_DIR}/authorized_keys`, key + '\n');
}
