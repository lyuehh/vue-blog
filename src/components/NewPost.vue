<template>
  <div class="post">
    <h2>新建post</h2>
    <form>
      <p>
        <label htmlFor="title">标题:</label>
        <input id="title" type="text" name="title" v-model="title" />
      </p>
      <p>
        <label htmlFor="author">作者:</label>
        <input id="author" type="text" name="author" v-model="author" />
      </p>
      <p>
        <label htmlFor="content">内容:</label>
        <input id="content" type="text" name="content" v-model="content" />
      </p>
      <p>
        <button type="button" @click="addPost()">提交</button>
      </p>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: '',
      author: '',
      content: ''
    }
  },
  methods: {
    addPost() {
      var post = {
        title: this.title,
        author: this.author,
        content: this.content
      }
      this.$store.dispatch('addPost', post)
      this.reset()
    },
    reset() {
      this.title = ''
      this.author = ''
      this.content = ''
    }
  }
}
</script>
