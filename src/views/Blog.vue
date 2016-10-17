<template>
  <div class="blog">
    <h1>blog</h1>
    <PostList :posts="posts" />
    <NewPost />
  </div>
</template>

<script>
  import PostList from '../components/PostList'
  import NewPost from '../components/NewPost'

  export default {
    components: {
      PostList,
      NewPost
    },
    data() {
      return {
        posts: this.$store.state.posts
      }
    }
  }
</script>
