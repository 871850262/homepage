//api统一管理

import requests from '@/api/request'

export const reqGetBannerList = () => {
  return requests({ url: '/getSwiperImg', method: 'get' })
}
export const reqGetResearchList = () => {
  return requests({ url: '/getResearchList', method: 'get' })
}
export const reqGetPublicationsList = (year: number) => {
  return requests({ url: `/getPublicationsList?year=${year}`, method: 'get' })
}
export const reqGetPublicationsYearIndex = () => {
  return requests({ url: '/getPublicationsYearIndex', method: 'get' })
}
export const reqGetPeopleList = () => {
  return requests({ url: '/getPeopleList', method: 'get' })
}

