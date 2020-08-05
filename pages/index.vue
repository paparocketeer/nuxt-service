<template>
  <section>
    <div class=my-8>
      <ul class="flex flex-col w-full p-0">
        <li class="mb-6 w-full" v-for="(post, key) in posts" :key="key">
          <div class="text-gray-600 font-bold text-sm tracking-wide">
            {{ post._created | toDate }}
            <span class="ml-1 text-xs">•</span>
            <a v-for="tag in post.tags" :key="tag" :href="'/category/'+tag" class="ml-1">{{ tag }}</a>
          </div>

          <a :href="'/'+post.title_slug">
            <h2 class="my-2 text-gray-800 text-lg lg:text-xl font-bold">
              {{ post.title }}
            </h2>
          </a>

          <div class="page-content hidden md:block text-base mb-2" v-html="post.excerpt">
          </div>
          <a class="text-sm text-blue-400 no-underline" :href="'/'+post.title_slug">
            Read more
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  async asyncData ({ app }) {
    const { data } = await app.$axios.post(process.env.POSTS_URL,
    JSON.stringify({
        filter: { published: true },
        sort: {_created:-1},
        populate: 1
      }),
    {
      headers: { 'Content-Type': 'application/json' }
    })

    return { posts: data.entries }
  }
}
</script>