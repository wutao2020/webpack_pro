
import request from '@/utils/request'
export default{
  list() {
    return request({
      url: '/admin/edu/teacher/getAll',
      method: 'get'
    })
  },
  // / 分页查询
  gageList(page, limit, searchObj) {
    return request({
      url: `/admin/edu/teacher/list/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  // /删除
  removeById(id) {
    return request({
      url: `/admin/edu/teacher/remove/${id}`,
      method: 'delete'
    })
  },
  // 批量删除
  batchRemove(ids) {
    return request({
      url: '/admin/edu/teacher/batch-remove',
      method: 'delete',
      data: ids
    })
  },
  save(teacher) {
    return request({
      url: '/admin/edu/teacher/save',
      method: 'post',
      data: teacher
    })
  },
  getById(id) {
    return request({
      url: `/admin/edu/teacher/get/${id}`,
      method: 'get'
    })
  },

  updateById(teacher) {
    return request({
      url: '/admin/edu/teacher/update',
      method: 'put',
      data: teacher
    })
  },
  selectNameListByKey(key) {
    return request({
      url: `/admin/edu/teacher/list/name/${key}`,
      method: 'get'
    })
  }
}
