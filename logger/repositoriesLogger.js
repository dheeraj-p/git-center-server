import log from './loggerUtils';
import severity from './severity';

class RepositoriesLogger {
  constructor() {}

  logAllRepositoriesFound() {
    log(severity.INFO, 'All repositories found.');
  }

  logNewRepositoryCreated(repositoryName) {
    log(severity.INFO, `New repository created with name ${repositoryName}`);
  }
}

export default RepositoriesLogger;
