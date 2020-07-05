import { projectService } from '../services';
import { projectActionTypes } from '../constants';
const { UNAUTHORIZED, NOT_FOUND } = require('http-status-codes');

export const resetGetAllProjects = () => {
  return {
    type: projectActionTypes.RESET_GET_PROJECTS,
  };
};

export const getAllProjects = ( sort, filter) => async (dispatch, getState) => {
  let response, data, projectsResponseErrorCode, projectError;
  try {
    response = await projectService.getProjects( sort, filter);
    data = response.data;
  } catch (e) {
    projectsResponseErrorCode = e.response ? e.response.status : e;
    if (projectsResponseErrorCode === NOT_FOUND) {
      projectError = 'Does not exist';
    } else if (projectsResponseErrorCode === UNAUTHORIZED) {
      projectError = 'Forbidden';
    } else {
      projectError = 'Something went wrong';
    }
  }
  if (projectsResponseErrorCode) {
    dispatch({ type: projectActionTypes.GET_PROJECTS_FAILURE, payload: { getProjectsError: projectError } });
  } else {
    dispatch({ type: projectActionTypes.GET_PROJECTS_SUCCESS, payload: data })
  }
}