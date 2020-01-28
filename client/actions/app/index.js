import actionTypes from './actionTypes';

export const updateAppLoading = boolean => ({
    type: actionTypes.APP_LOADING,
    data: { 'isAppLoading': boolean }
});