import { projectActionTypes } from '../constants';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { createWhitelistFilter } from 'redux-persist-transform-filter';

const persistConfig = {
  key: 'project',
  storage: storage,
  timeout: null,
  // whitelist: ['session'],
  // transforms: [
  //   createWhitelistFilter('auth', ['session']),
  // ],
};

const initState = {};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case projectActionTypes.RESET_GET_PROJECTS:
      return {
        ...state,
        projectList: null,
      }
    case projectActionTypes.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projectList: action.payload,
      }
    case projectActionTypes.GET_PROJECTS_FAILURE:
      return {
        ...state,
      }
    default:
      return state
  }
};


const persistProjectReducer = persistReducer(persistConfig, projectReducer);
export default persistProjectReducer;
