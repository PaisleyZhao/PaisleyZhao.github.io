// 挚爱作品数据：封面在 covers/ 下，条目来自豆瓣（2026.08 抓取）
// 音乐/影视：title 短标题 + creator/year + 豆瓣条目公开链接
// 最佳现场（drama）：纯票根数据，无链接、无账号信息；type ∈ 话剧/舞剧/音乐剧/高清放映
window.SHELF_DATA = {
  music: [
    { title: "The Legend of 1900", creator: "Ennio Morricone", year: "1999", link: "https://music.163.com/album?id=499426", cover: "covers/music-01.jpg" },
    { title: "The Liszt Recordings", creator: "Krystian Zimerman", year: "2011", link: "https://music.163.com/album?id=35414139", cover: "covers/music-02.jpg" },
    { title: "Concertos 24", creator: "Jascha Heifetz", year: "1995", link: "https://music.163.com/album?id=163037", cover: "covers/music-03.jpg" },
    { title: "大状王原声大碟", creator: "劉守正 / 鄭君熾 / 丁彤欣", year: "2022", link: "https://music.163.com/album?id=350157412", cover: "covers/music-04.jpg" },
    { title: "Ghost Stories", creator: "Coldplay", year: "2014", link: "https://music.163.com/album?id=78297173", cover: "covers/music-05.jpg" },
    { title: "感官/世界", creator: "林宥嘉", year: "2009", link: "https://music.163.com/album?id=10764", cover: "covers/music-06.jpg" },
    { title: "Live at The Wiltern", creator: "NIKI", year: "2023", link: "https://music.163.com/album?id=165088451", cover: "covers/music-07.jpg" },
    { title: "美妙生活", creator: "林宥嘉", year: "2011", link: "https://music.163.com/album?id=10757", cover: "covers/music-08.jpg" },
    { title: "PURPOSE", creator: "金泰妍 Taeyeon", year: "2020", link: "https://music.163.com/album?id=84991049", cover: "covers/music-09.jpg" }
  ],
  movies: [
    { title: "天堂电影院", creator: "朱塞佩·托纳多雷", year: "1988", link: "https://movie.douban.com/subject/1291828/", cover: "covers/movie-01.jpg" },
    { title: "堕落天使", creator: "王家卫", year: "1995", link: "https://movie.douban.com/subject/1298112/", cover: "covers/movie-02.jpg" },
    { title: "情书", creator: "岩井俊二", year: "1995", link: "https://movie.douban.com/subject/1292220/", cover: "covers/movie-03.jpg" },
    { title: "花样年华", creator: "王家卫", year: "2000", link: "https://movie.douban.com/subject/1291557/", cover: "covers/movie-04.jpg" },
    { title: "世界的主人", creator: "尹佳恩", year: "2025", link: "https://movie.douban.com/subject/37116612/", cover: "covers/movie-05.jpg" },
    { title: "再次出发", creator: "约翰·卡尼", year: "2013", link: "https://movie.douban.com/subject/6874403/", cover: "covers/movie-06.jpg" },
    { title: "谁先爱上他的", creator: "徐誉庭 / 许智彦", year: "2018", link: "https://movie.douban.com/subject/27119586/", cover: "covers/movie-07.jpg" },
    { title: "寻找小糖人", creator: "马利克·本德杰鲁", year: "2012", link: "https://movie.douban.com/subject/7015798/", cover: "covers/movie-08.jpg" },
    { title: "流人 S2", creator: "杰里米·洛夫林", year: "2022", link: "https://movie.douban.com/subject/35356697/", cover: "covers/movie-09.jpg" }
  ],
  // 最佳现场：按观演日期倒序。dramaTotal = 豆瓣标记看过的现场总数（看完新的就 +1）
  dramaTotal: 122,
  drama: [
    { title: "非穷尽列举", type: "高清放映", creator: "NT Live", date: "2026.02.06" },
    { title: "丁西林民国喜剧三则", type: "话剧", creator: "北京人艺", date: "2025.12.19" },
    { title: "海盗", type: "舞剧", creator: "马林斯基", date: "2025.10.15" },
    { title: "大状王", type: "音乐剧", creator: "香港话剧团", date: "2025.07.11" },
    { title: "哗变", type: "话剧", creator: "北京人艺", date: "2025.02.20" },
    { title: "茶馆", type: "话剧", creator: "北京人艺", date: "2024.02.28" },
    { title: "空中花园谋杀案", type: "音乐剧", creator: "孟京辉", date: "2023.12.24" },
    { title: "老式喜剧", type: "话剧", creator: "北京人艺", date: "2023.08.27" },
    { title: "世界旦夕之间", type: "话剧", creator: "李建军", date: "2023.07.02" },
    { title: "初步举证", type: "高清放映", creator: "NT Live", date: "2023.01.01" },
    { title: "只此青绿", type: "舞剧", creator: "周莉亚×韩真", date: "2022.04.11" },
    { title: "春逝", type: "话剧", creator: "话剧九人", date: "2021.09.12" },
    { title: "恋爱的犀牛", type: "话剧", creator: "孟京辉", date: "2021.01.29" },
    { title: "永不消逝的电波", type: "舞剧", creator: "上海歌舞团", date: "2019.12.29" },
    { title: "杏仁豆腐心", type: "话剧", creator: "蒋奇明", date: "2019.10.19" }
  ]
};
