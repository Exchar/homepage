export default {
  //顶部滚动文本
  typingText: [
    "今宵不觉春，闻得夜雨声。愚昔竟可复，黯黯入心魂。",
    "噬尽风霜，竟被其所伤。侧躺听雨眠，忧肠自断。",
    "且尽红裙歌一曲，莫辞白酒饮千钟。人生半在别离中。",
    "十年无梦得还家，独立青峰野水涯。天地寂寥山雨歇，几生俢得到梅花。",
  ],
  // 指定左侧导航栏的列表，anchor为区块的id
  contentLinks: [
    {
      anchor: "experience",
      title: "经历",
      show: false,
    },
    {
      anchor: "articles",
      title: "文章",
      show: true,
    },
    {
      anchor: "projects",
      title: "项目",
      show: true,
      // children: [
      //   {
      //     anchor: "finance-web",
      //     title: "平台",
      //     show: true,
      //   },
      // ],
    },
    {
      anchor: "websites",
      title: "网址分享",
      show: true,
      // children: [
      //   {
      //     anchor: "finance-web",
      //     title: "平台",
      //     show: true,
      //   },
      // ],
    },
  ],
  projectList:[{
    url:'https://music.atian.work/',
    name:'YesMusic',
    desc:'一个开源的基于网易云音乐api开源音乐App，使用electorn构建，支持多端发布，部署在vercel上',
    img:'https://pic1.zhimg.com/80/v2-033acfbb3b219885c155386af9838884_720w.webp'
  },{
    url:'https://musicapi.atian.work/',
    name:'MusicApi',
    desc:'网易云音乐api，使用nodejs构建，支持多端发布，部署在vercel上',
    img:'https://pica.zhimg.com/v2-22bea0614cf4a76b528b4360f5d26a2d_1440w.jpg?source=172ae18b'
  },{
    url:'https://alveloe.atian.work/',
    name:'Voleloe',
    desc:'老版主页，使用vue2构建，魔改自Vuesme个人博客项目',
    img:'https://ss3.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2525456878,1612246651&fm=253&gp=0.jpg'
  },{
    url:'https://p2pweb.atian.work/',
    name:'P2PFinanceWeb',
    desc:'p2p借贷后台系统-前端',
    img:'https://ss3.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2525456878,1612246651&fm=253&gp=0.jpg'
  },{
    url:'https://musictest.atian.work/',
    name:'MusicTest',
    desc:'一个写了1%的音乐网站，懒得写了',
    img:'https://ss3.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2525456878,1612246651&fm=253&gp=0.jpg'
  },{
    url:'https://vuetemplate.atian.work/',
    name:'VueTemplate',
    desc:'vue3+TS+vite模板，集成naiveUI，Axios，vuex，方便构建程序',
    img:'https://ss3.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2525456878,1612246651&fm=253&gp=0.jpg'
  }],
  websites:[{
    url:'https://webgradients.com/',
    name:'webgradients',
    desc:'还不错的生成渐变色的网站',
    img:'https://images.shejidaren.com/wp-content/uploads/2017/02/110653nO0.jpg'
  },{
    url:'https://www.naiveui.com/zh-CN/os-theme',
    name:'naiveUI',
    desc:'一个使用Vue3+ts构建的UI库，由图森未来开源，简单易用，不错！',
    img:'https://picx.zhimg.com/v2-9ef4c2739a9f09fa613be7f733f437d5_1440w.jpg?source=172ae18b'
  }]
};

