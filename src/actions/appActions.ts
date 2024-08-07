import { SET_CURRENT_APP, UPDATE_SHARED_DATA } from './types';
import { SharedData } from '../types';

export const setCurrentApp = (appName: string) => ({
  type: SET_CURRENT_APP as typeof SET_CURRENT_APP,
  payload: appName,
});

export const updateSharedData = (data: SharedData) => ({
  type: UPDATE_SHARED_DATA as typeof UPDATE_SHARED_DATA,
  payload: data,
});

export type AppAction = 
  | ReturnType<typeof setCurrentApp>
  | ReturnType<typeof updateSharedData>