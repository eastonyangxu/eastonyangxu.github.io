import { UserPlugins } from "vuepress/config";
import dayjs from "dayjs";

export default <UserPlugins>[
  // 自定义插件，即本地插件
  [
    {
      name: "custom-plugins",
      globalUIComponents: ["BlockToggle", "PageInfo"], // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    },
  ],
  // 支持图片缩放
  [
    "vuepress-plugin-zooming", // 放大图片
    {
      selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
      options: {
        bgColor: "rgba(0,0,0,0.6)",
      },
    },
  ],
  [
    "one-click-copy", // 代码块复制按钮
    {
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside',
      ], // String or Array
      copyMessage: "复制成功", // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    "@vuepress/last-updated", // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
      },
    },
  ],
  [
    "sitemap", // 网站地图
    {
      hostname: "https://eastonyangxu.github.io/",
    },
  ],
  // 富文本插件
  [
    "vuepress-plugin-container",
    {
      type: "vue",
      before: '<pre class="vue-container"><code>',
      after: "</code></pre>",
    },
  ],
  ["vuepress-plugin-mermaidjs"],
  // 全文搜索插件
  ["vuepress-plugin-fulltext-search"],
  // vuepress-plugin-tabs。官网：https://github.com/pskordilakis/vuepress-plugin-tabs
  ["tabs"],
  // 顶部阅读进度插件
  ["reading-progress"],
];
