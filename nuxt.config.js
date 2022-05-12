export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Jinooo's Blog",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content:
          "jinooo的个人博客网站,jinooo Blog,分享精美原创个人博客模板，个人网站模板，响应式网站模板， html5个人博客模板下载"
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "个人博客,个人网站,优秀的个人网站,个人博客模板,blog"
      },
      {
        hid: "author",
        name: "author",
        content: "jinooo,罗文"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["ant-design-vue/dist/antd.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["@/plugins/antd-ui", "@/plugins/markdown","@/plugins/axios","@/plugins/filter_time"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL:"https://efa3e3c9-de17-4aec-bbda-3c16bfff20ac.bspapp.com",
    // prefix: "/api/",
    credentials: true
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
