import Mock from 'mockjs'

//json文件不用对外暴露
//webpack默认对外暴露：图片，json数据格式
import banner from './banner.json'
import research from './research.json'
import publicationsList from './publicationsList.json'
import publicationsYearIndex from './publicationsYearIndex.json'


Mock.mock('/mock/banner', { code: 200, data: banner })
Mock.mock('/mock/research', { code: 200, data: research })
Mock.mock('/mock/publicationsYearIndex', { code: 200, data: publicationsYearIndex })
Mock.mock(/\/mock\/publicationsList/, 'get', (option: any) => {
  const params = new URLSearchParams(option.url.split('?')[1])
  const year = params.get('year')
  const data = publicationsList.find((item) => item.year === year)
  if (data) {
    return {
      status: 200,
      message: 'success',
      data
    }
  } else {
    return {
      status: 404,
      message: '没有这个年份的文章'
    }
  }
})

