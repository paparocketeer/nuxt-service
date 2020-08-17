<template>
  <section>
    <article class="my-8" v-if="post">
      <h1 class="mt-2 text-3xl font-bold">{{ post.title }}</h1>
      <div
        class="mt-4 markdown"
        v-html="post.content"
      ></div>
    </article>
    <article v-else>
      waiting
    </article>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: this.post.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.excerpt },
      ],
    }
  },
  async asyncData({ app, params, error, payload }) {
    if (payload) {
      console.log('payload')
      return { post: payload }
    } else {

      try {
        let res = await app.$axios.post(
        process.env.POSTS_URL,
        JSON.stringify({
          filter: { published: true, title_slug: params.title_slug },
          sort: { _created: -1 },
          populate: 1,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )

      console.log(res)
      return { post: res.data.entries[0] }

      } catch (err) {
        console.log(err)
        return error({ message: '404 Page not found', statusCode: 404 })
      }
      
    }
  },
}
</script>

<style lang="scss" scoped>
</style>