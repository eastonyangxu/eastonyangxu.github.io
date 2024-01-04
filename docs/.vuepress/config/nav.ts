import { NavItem } from "vuepress/config";

export const NavItems4ZH: NavItem[] = [
  { text: "首页", link: "/" },
  {
    text: "后端",
    link: "/back_end/",
    ariaLabel: "后端知识",
    items: [
      {
        text: "编程语言",
        items: [{ text: "Python", link: "/note/python/" }],
      },
      {
        text: "框架",
        items: [{ text: "Django", link: "/note/django/" }],
      },
    ],
  },
  {
    text: "前端",
    link: "/web/",
    ariaLabel: "前端知识",
    items: [
      { text: "Mdn", link: "https://developer.mozilla.org/zh-CN/" },
      { text: "HTML", link: "/note/html/" },
      { text: "CSS", link: "/note/css/" },
      { text: "JavaScript", link: "/note/javascript/" },
    ],
  },
  {
    text: "数据库",
    link: "/database/",
    items: [
      { text: "Mysql", link: "/note/mysql/" },
      { text: "PostgreSQL", link: "/note/pgsql/" },
      { text: "Elasticsearch", link: "/note/es/" },
      { text: "MongoDB", link: "/note/mongo/" },
      { text: "Redis", link: "/note/redis/" },
    ],
  },
  {
    text: "服务器",
    link: "/server/",
    ariaLabel: "服务器相关知识",
    items: [
      { text: "服务器命令", link: "/note/command/" },
      { text: "Docker", link: "/note/docker/" },
    ],
  },
  {
    text: "工具",
    link: "/tool/",
    items: [{ text: "GIT", link: "/note/git/" }],
  },
  {
    text: "更多",
    link: "/more/",
    items: [
      { text: "摄影", link: "/photo/" },
      { text: "草稿", link: "/note/tmp/" },
    ],
  },
  {
    text: "索引",
    link: "/tags/",
    items: [
      {
        text: "归类方式",
        items: [
          { text: "分类", link: "/categories/" },
          { text: "标签", link: "/tags/" },
          { text: "归档", link: "/archives/" },
        ],
      },
      {
        text: "关于博客",
        items: [
          { text: "博客教程", link: "/case/" },
          { text: "友情链接", link: "/friends/" },
          { text: "关于", link: "/about/" },
        ],
      },
    ],
  },
  {
    text: "导航站",
    link: "/web/resources/",
  },
];
