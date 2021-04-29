<template>
  <div id="app-container">
    <el-table :data="list" style="width: 100%" border stripe>
      <el-table-column type="index" width="50" />
      <el-table-column prop="integralStart" label="积分开始区间" />
      <el-table-column prop="integralEnd" label="积分结束区间" />
      <el-table-column prop="borrowAmount" label="借款额度(元)" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <router-link
            :to="'/core/integral-grade/edit/' + scope.row.id"
            style="margin-right-:5px"
          >
            <el-button type="danger" size="mini" icon="el-icon-edit">
              编辑
            </el-button>
          </router-link>
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="removeById(scope.row.id)"
          >
            删除
          </el-button>
          <!-- <el-button
            type="primary"
            size="mini"
            icon="el-icon-edit"
            @click="getById(scope.row.id)"
          >
            详情
          </el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
//引入api模块
import integralGradApi from '@/api/core/integral-grade'

export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      integralGradApi.list().then(response => {
        this.list = response.data.integralGrades
      })
    },
    removeById(id) {
      this.$confirm('此操作将永久删除该积分等级, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          return integralGradApi.removeById(id)
        })
        .then(response => {
          this.$message({
            showClose: true,
            message: response.message,
            type: 'success'
          })
          this.fetchData()
        })
        .catch(error => {
          console.log('catch的' + error)
          if (error === 'cancel') {
            this.$message({
              type: 'info',
              message: '已取消'
            })
          }
        })
    },
    getById(id) {
      integralGradApi.getById(id).then(response => {
        this.$message({
          showClose: true,
          message: response.message,
          type: 'success'
        })
      })
    }
  }
}
</script>
