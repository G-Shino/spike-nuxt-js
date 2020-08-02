export default {
  css:[
    "@/assets/style/reset.css",
    "@/assets/sass/app.scss"
  ],
  head: {
    title: 'spike-nuxt-js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'nuxtjsのお試し用' },
    ],
    link: [
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" },
      { rel: 'stylesheet', href: "https://use.fontawesome.com/releases/v5.6.1/css/all.css"}
    ]
  },
}
