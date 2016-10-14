<template>
  <div class="post">
    <h2>{{ post.title }}</h2>
    <p>作者: {{ post.author }}</p>
    <p>内容: {{ post.content }}</p>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>
