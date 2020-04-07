import fs from 'fs';

const getConfig = commandPath => {
  return `command="${commandPath}",no-port-forwarding,no-X11-forwarding,no-agent-forwarding,no-pty`;
};

export async function addKeyToFile(key) {
  const contents = `${getConfig('./git-serve')} ${key}\n`;
  fs.appendFileSync(`${process.env.AUTHORIZED_KEYS_DIR}/authorized_keys`,contents);
}
