
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
  }
}
