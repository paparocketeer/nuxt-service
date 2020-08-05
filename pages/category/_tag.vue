<template>
  <section>
    <div class="my-8">
      <h1 class="mb-6">Posts tagged with "{{ category }}"</h1>
      <ul class="flex flex-col w-full p-0">
        <li class="mb-6 w-full" v-for="(post, key) in posts" :key="key">
          <div class="text-gray-600 font-bold text-sm tracking-wide">
            <a
              v-for="(tag, key) in post.tags"
              :key="key"
              :href="'/category/'+tag"
              class="ml-1"
            >{{ tag }}</a>
          </div>

          <a :href="'/'+post.title_slug">
            <h2 class="my-2 text-gray-800 text-lg lg:text-xl font-bold">{{ post.title }}</h2>
          </a>

          <div class="page-content hidden md:block text-base mb-2" v-html="post.excerpt"></div>
          <a class="text-sm text-blue-400" :href="'/'+post.title_slug">Read more</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: `Posts tagged with ${this.category}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `All blog posts categorised as ${this.category}.`,
        },
      ],
    }
  },
  async asyncData({ app, params, error, payload }) {
    if (payload) {
      return { posts: payload, category: params.tag }
    } else {
      let { data } = await app.$axios.post(
        process.env.POSTS_URL,
        JSON.stringify({
          filter: { published: true, tags: { $has: params.tag } },
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

      return { posts: data.entries, category: params.tag }
    }
  },
}
</script>