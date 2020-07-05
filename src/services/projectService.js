import axios from 'axios';

async function getProjects( sort, filter) {
  const url = `https://us-central1-web-dashboard-1.cloudfunctions.net/api/projects?sort=${sort}&filter=${filter}`;
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
    responseType: 'json',
    responseEncoding: 'utf8',
    url,
  };
  const result = await axios(options);
  return result;
};

export const projectService = {
  getProjects
};
