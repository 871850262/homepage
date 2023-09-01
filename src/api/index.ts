//api统一管理

// import requests from '@/api/request'
import mockRequest from '@/api/mockRequest'

export const reqGetBannerList = () => {
  return mockRequest({ url: '/banner', method: 'get' })
}
export const reqGetResearchList = () => {
  return mockRequest({ url: '/research', method: 'get' })
}
export const reqGetPublicationsList = (year: number) => {
  return mockRequest({ url: `/publicationsList?year=${year}`, method: 'get' })
}
export const reqGetPublicationsYearIndex = () => {
  return mockRequest({ url: '/publicationsYearIndex', method: 'get' })
}

