import git from 'simple-git/promise';
import path from 'path';
import fs from 'fs';

const repostoryPath = (name) => {
  return path.join(process.env.REPOSITORIES_PATH, name + '.git');
};

export async function initBareRepository(name) {
  const repoFullPath = repostoryPath(name);
  fs.mkdirSync(repoFullPath, { recursive: true });
  await git(repoFullPath).init(true);
}
