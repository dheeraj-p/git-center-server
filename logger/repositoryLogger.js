import log from './loggerUtils';
import severity from './severity';

class RepositoryLogger {
  constructor() {}

  logRepositoryOpen(repository) {
    log(severity.INFO, `Repository opend. Repository --> ${repository}`);
  }

  logBranchBlobOpen(branch) {
    log(severity.INFO, `Branch blob opend. Branch --> ${branch}`);
  }

  logGotBranchTree(branch) {
    log(severity.INFO, `Got entries from branch tree. Branch --> ${branch}`);
  }

  logGotCurrentBranch(branch) {
    log(severity.INFO, `Got current branch. Branch --> ${branch}`);
  }
}

export default RepositoryLogger;
