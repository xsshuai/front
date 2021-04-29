<template>
  <div class="app-container">
    <!-- 表单输入 -->
    <el-form label-width="120px">
      <el-form-item label="积分区间开始">
        <el-input-number v-model="integralGrade.integralStart" :min="0" />
      </el-form-item>
      <el-form-item label="积分区间结束">
        <el-input-number v-model="integralGrade.integralEnd" :min="0" />
      </el-form-item>
      <el-form-item label="借款额度">
        <el-input-number v-model="integralGrade.borrowAmount" :min="0" />
      </el-form-item>
      <el-form-item>
        <el-button
          :disabled="saveBtnDisabled"
          type="primary"
          @click="saveOrUpdate()"
        >
          保存
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
//引入api模块
import integralGradApi from '@/api/core/integral-grade'
export default {
  data() {
    return {
      //禁用表单按钮，防止重复提交
      saveBtnDisabled: false,
      //积分等级对象
      integralGrade: {}
    }
  },

  created() {
    if (this.$route.params.id) {
      this.fetchById(this.$route.params.id)
    }
  },
  methods: {
    //根据id获取
    fetchById(id) {
      integralGradApi.getById(id).then(response => {
        this.integralGrade = response.data.integralGrade
      })
    },
    //保存或更新
    saveOrUpdate() {
      //禁用保存按钮
      this.saveBtnDisabled = true

      if (this.integralGrade.id) {
        //调用更新
        this.updateData()
      } else {
        //调用新增
        this.saveData()
      }
    },
    saveData() {
      //debugger
      integralGradApi.save(this.integralGrade).then(response => {
        this.$message({
          type: 'success',
          message: response.message
        })
        this.$router.push('/core/integral-grade/list')
      })
    },
    updateData() {
      integralGradApi.updateById(this.integralGrade).then(response => {
        this.$message({
          type: 'success',
          message: response.message
        })
        this.$router.push('/core/integral-grade/list')
      })
    }
  }
}
</script>
