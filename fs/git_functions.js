import git from 'simple-git/promise';
import path from 'path';
import fs from 'fs';
import NodeGit from 'nodegit';
import _ from 'lodash';

const repostoryPath = name => {
  return path.join(process.env.REPOSITORIES_PATH, name + '.git');
};

export async function initBareRepository(name) {
  const repoFullPath = repostoryPath(name);
  fs.mkdirSync(repoFullPath, { recursive: true });
  await git(repoFullPath).init(true);
}

export async function getCurrentBranch(repository) {
  const currentBranchRef = await repository.getCurrentBranch();
  return await NodeGit.Branch.name(currentBranchRef);
}

const treeEntryToJSON = treeEntry => {
  const type = treeEntry.isBlob() ? 'blob' : 'tree';
  return {
    type,
    name: treeEntry.name(),
    path: treeEntry.path()
  };
};

export async function getLatestCommitTree(repository, branch, path) {
  const lastestCommit = await repository.getBranchCommit(branch);
  const pathEntry = path ? await lastestCommit.getEntry(path) : lastestCommit;
  const pathTree = await pathEntry.getTree();
  return sortEntries(pathTree.entries()).map(treeEntryToJSON);
}

export function sortEntries(entries) {
  return _.sortBy(entries, entry => entry.isBlob());
}

export function openRepo(repositoryName) {
  return NodeGit.Repository.openBare(repostoryPath(repositoryName));
}
