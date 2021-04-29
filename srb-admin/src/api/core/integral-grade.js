//引入axios的初始化模块
import request from '@/utils/request'

//导出默认模块
export default {
  //定义模块成员
  //成员方法，获取积分列表等级
  list() {
    //调用axios的初始化模块，发送远程ajax请求
    return request({
      url: '/admin/core/integralGrade/list',
      method: 'get'
    })
  },
  removeById(id) {
    return request({
      url: '/admin/core/integralGrade/delete/' + id,
      method: 'delete'
    })
  },
  getById(id) {
    return request({
      url: '/admin/core/integralGrade/get/' + id,
      method: 'get'
    })
  },
  save(integralGrade) {
    return request({
      url: '/admin/core/integralGrade/save',
      method: 'post',
      data: integralGrade
    })
  },
  updateById(integralGrade) {
    return request({
      url: '/admin/core/integralGrade/update',
      method: 'put',
      data: integralGrade
    })
  }
}
