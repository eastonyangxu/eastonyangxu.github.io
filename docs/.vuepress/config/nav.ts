import { NavItem } from 'vuepress/config'

export const NavItems4ZH: NavItem[] = [
  { text: '首页', link: '/' },
  {
    text: '后端',
    link: '/back_end/',
    ariaLabel: '后端知识',
    items: [
      {
        text: '编程语言',
        items: [
          { text: 'Python', link: '/note/python/' }
        ]
      },
      {
        text: '数据库',
        items: [
          { text: 'Mysql', link: '/note/mysql/' }
        ]
      },
      {
        text: '框架',
        items: [
          { text: 'Django', link: '/note/django/' }
        ]
      }
    ]
  },
  {
    text: '前端',
    link: '/web/',
    ariaLabel: '前端知识',
    items: [
      {
        text: 'HTML',
        link: '/note/html/'
      },
      {
        text: 'CSS',
        link: '/note/css/'
      },
      {
        text: 'JavaScript',
        link: '/note/javascript/'
      }
    ]
  },
  {
    text: '服务器',
    link: '/server/',
    ariaLabel: '服务器相关知识',
    items: [
      {
        text: 'GIT',
        link: '/note/git/'
      },
      {
        text: 'docker',
        link: '/note/docker/'
      },
    ]
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '草稿', link: '/note/tmp/' },
      { text: '友情链接', link: '/friends/' },
    ],
  },
  { text: '关于', link: '/about/' },
  {
    text: '资源',
    link: '/note/resources/',
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
