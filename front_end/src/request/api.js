import request from './request'
//example
export const searchBuilding = (params)=> request.get('/search',params)

export const reportEmpty = (params)=> request.post('/report-miss',params)