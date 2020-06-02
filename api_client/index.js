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

export async function httpGET(url) {
  const response = await fetch(url);
  return response.json();
}

export function createRepository(repositoryName, baseURL = '') {
  return httpPOST(`${baseURL}/api/repositories`, { repositoryName });
}

export function addSSHKey(sshKey, baseURL = '') {
  return httpPOST(`${baseURL}/api/ssh`, { sshKey });
}

export function getGitObject(repository, type, path, baseURL = '') {
  const repositoryURL = [repository, type, ...path].join('/');
  return httpGET(`${baseURL}/api/repository/${repositoryURL}`);
}

export function createUser(name, username, password, baseURL = '') {
  return httpPOST(`${baseURL}/api/user`,{ name, username, password })
}
