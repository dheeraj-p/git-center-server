import log from './loggerUtils';
import severity from './severity';

class TreeLogger {
  constructor() {}

  logRepositoryOpen(repoName) {
    log(severity.INFO, `Repository opend. Repository --> ${repoName}`);
  }

  logGotBranchTree(branch) {
    log(severity.INFO, `Branch blob opend. Branch --> ${branch}`);
  }
}

export default TreeLogger;
