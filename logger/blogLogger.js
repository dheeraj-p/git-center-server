import log from './loggerUtils';
import severity from './severity';

class BlobLogger {
  constructor() {}

  logRepositoryOpen(repoName) {
    log(severity.INFO, `Repository opend. Repository --> ${repoName}`);
  }

  logBranchBlobOpen(branch) {
    log(severity.INFO, `Branch blob opend. Branch --> ${branch}`);
  }
}

export default BlobLogger;
