const log = (severity, message) => {
  const logMessage = {
    severity,
    message,
  };
  console.log(JSON.stringify(logMessage));
};

export default log;
