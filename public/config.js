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
      children: [
        {
          anchor: "finance-web",
          title: "平台",
          show: true,
        },
      ],
    },
  ],
};
