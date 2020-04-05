export async function withError(promise) {
  try {
    let res = await promise;
    return [null, res];
  } catch (err) {
    return [err, null];
  }
}