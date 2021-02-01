<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>发表文章</span>
        <el-button style="float:right;" type="danger">存入草稿</el-button>
        <el-button style="float:right;margin-right:10px;" type="primary">发布</el-button>
      </div>
      <el-form ref="addFormRef" :model="addForm" label-width="120px">
        <el-form-item label="标题：">
          <el-input v-model="addForm.title"></el-input>
        </el-form-item>
        <el-form-item label="内容："></el-form-item>
        <el-form-item label="封面：">
          <el-radio-group v-model="addForm.cover.type">
            <el-radio label="1">单图</el-radio>
            <el-radio label="3">三图</el-radio>
            <el-radio label="0">无图</el-radio>
            <el-radio label="-1">自动</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道：">
          <el-select v-model="addForm.channel_id" placeholder="请选择">
            <el-option
              v-for="item in channelList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>

// 文本编辑器css引入

// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.sonw.css'
// import 'quill/dist/quill.bubble.css'
// 主功能模块
// import {quillEditor }from 'vue-quill-editor'

export default {
  name: 'ArticleAddCom',
  components: {
    //私有方式注册
    quillEditor
  },
  created () {
    this.getChannelList() // 获取频道信息
  },
  methods: {
    // 获取频道列表信息
    getChannelList () {
      var pro = this.$http.get('/channels')
      pro
        .then(result => {
          // console.log(result)
          // 把获得好的频道信息赋予给 channelList 成员
          this.channelList = result.data.data.channels
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  data () {
    return {
      // 用户使用的频道列表信息
      channelList: [],
      addForm: {
        title: '',
        cover: {
          type: '0',
          images: []
        },
        channel_id: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
