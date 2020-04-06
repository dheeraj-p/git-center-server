import fetch from 'isomorphic-unfetch';

export async function httpPOST(url, body) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  return response.json();
}

export async function createRepository(repositoryName, baseURL = '') {
  return await httpPOST(`${baseURL}/api/repositories`, { repositoryName });
}

export async function addSSHKey(sshKey, baseURL = '') {
  return await httpPOST(`${baseURL}/api/ssh`, { sshKey });
}
