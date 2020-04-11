const log = (severity, message) => {
  const logMessage = {
    severity,
    message,
  };
  const prefix = '\n----------- Log  -----------\n';
  const postfix = '\n----------------------------\n';
  console.log(prefix + JSON.stringify(logMessage) + postfix);
};

export default log;
