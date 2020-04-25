export async function withError(promise) {
  try {
    let res = await promise;
    return [null, res];
  } catch (err) {
    return [err, null];
  }
}

export function isClientSide() {
  return process.browser;
}

//Server Side only
export function getBaseURL() {
  const protocol = process.env.SERVER_PROTOCOL;
  const host = process.env.SERVER_HOST;
  const port = process.env.SERVER_PORT;

  return `${protocol}://${host}:${port}`;
}
