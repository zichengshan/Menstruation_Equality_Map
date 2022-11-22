import request from './request'
//example
export const searchBuilding = (params) => request.get('/search', params)
export const selectBuilding = (params) => request.get('/all-buildings', params)
export const reportEmpty = (params) => request.post('/report-miss', params)