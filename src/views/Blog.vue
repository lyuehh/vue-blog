<template>
  <div class="blog">
    <h1>blog</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
  import PostList from '../components/PostList'

  export default {
    components: {
      PostList
    },
    data() {
      return {
        posts: [
          {
            title: '标题',
            author: 'xxx',
            content: 'xxx'
          },
          {
            title: '标题',
            author: 'xxx',
            content: 'xxx'
          }
        ]
      }
    }
  }
</script>
