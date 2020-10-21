import request from '@/utils/request'

export default {
  saveCourseInfo(courseInfo) {
    return request({
      url: '/admin/edu/course/save-course-info',
      method: 'post',
      data: courseInfo
    })
  },
  // 查询课程信息
  getCourseInfoById(id) {
    return request({
      url: `/admin/edu/course/course-info/${id}`,
      method: 'get'
    })
  },
  // 修改课程信息
  updateCourseInfoById(courseInfo) {
    return request({
      url: '/admin/edu/course/update-course-info',
      method: 'put',
      data: courseInfo
    })
  },
  // 获取课程列表信息
  getPageList(page, limit, searchObj) {
    return request({
      url: `/admin/edu/course/list/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  removeById(id) {
    return request({
      url: `/admin/edu/course/remove/${id}`,
      method: 'delete'
    })
  },
  getCoursePublishById(id) {
    return request({
      url: `/admin/edu/course/course-publish/${id}`,
      method: 'get'
    })
  },

  publishCourseById(id) {
    return request({
      url: `/admin/edu/course/publish-course/${id}`,
      method: 'put'
    })
  }
}
