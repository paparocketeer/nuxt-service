<template>
  <section>
    <article class="my-8">
      <div class="text-gray-600 font-bold text-sm tracking-wide">
        <a
          v-for="(tag, key) in post.tags"
          :key="key"
          :href="'/category/'+tag"
          class="ml-1"
        >{{ tag }}</a>
      </div>
      <h1 class="mt-2 text-3xl font-bold">{{ post.title }}</h1>
      <div
        class="mt-4 markdown"
        v-html="post.excerpt + '\n' + post.content"
      ></div>
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
      return { post: payload }
    } else {
      let { data } = await app.$axios.post(
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

      if (!data.entries[0]) {
        return error({ message: '404 Page not found', statusCode: 404 })
      }

      return { post: data.entries[0] }
    }
  },
}
</script>

<style lang="scss" scoped>
</style>