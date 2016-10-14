<template>
  <div class="post">
    <div v-for="post in posts">
      <Post :post="post" />
    </div>
  </div>
</template>

<script>
  import Post from '../components/Post'

  export default {
    components: {
      Post
    },
    props: ['posts']
}
</script>
