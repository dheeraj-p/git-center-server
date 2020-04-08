import git from 'simple-git/promise';
import path from 'path';
import fs from 'fs';
import NodeGit from 'nodegit';

const repostoryPath = name => {
  return path.join(process.env.REPOSITORIES_PATH, name + '.git');
};

export async function initBareRepository(name) {
  const repoFullPath = repostoryPath(name);
  fs.mkdirSync(repoFullPath, { recursive: true });
  await git(repoFullPath).init(true);
}

export async function getHeadCommitTree(repositoryName) {
  const repo = await NodeGit.Repository.openBare(repostoryPath(repositoryName));
  const currentBranchRef = await repo.getCurrentBranch();
  const branchName = await NodeGit.Branch.name(currentBranchRef);
  const headCommit = await repo.getHeadCommit();
  const commitTree = await headCommit.getTree();
  const entries = commitTree.entries().map(entry => {
    const type = entry.isBlob() ? 'blob' : 'tree';
    return {
      type,
      name: entry.name(),
      path: entry.path()
    };
  });

  return { branch: branchName, entries };
}

export async function getLastCommitTreeByPath(repositoryName, branch, path) {
  const repo = await NodeGit.Repository.openBare(repostoryPath(repositoryName));
  const lastestCommit = await repo.getBranchCommit(branch);
  const pathEntry = await lastestCommit.getEntry(path);
  const pathTree = await pathEntry.getTree();
  return pathTree.entries().map(entry => {
    const type = entry.isBlob() ? 'blob' : 'tree';
    return {
      type,
      name: entry.name(),
      path: entry.path()
    };
  });
}
