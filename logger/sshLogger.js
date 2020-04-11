import log from './loggerUtils';
import severity from './severity';

class SSHLogger {
  constructor() {}

  logSSHKeyAdded(key) {
    log(severity.INFO, `SSH Key added. Key -> ${key}`);
  }
}

export default SSHLogger;
