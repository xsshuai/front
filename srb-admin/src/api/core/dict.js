//引入axios的初始化模块
import request from '@/utils/request'

//导出默认模块
export default {
  //定义模块成员
  //成员方法，获取积分列表等级

  listByParentId(parentId) {
    //调用axios的初始化模块，发送远程ajax请求
    return request({
      url: '/admin/core/dict/get/' + parentId,
      method: 'get'
    })
  }
}
