// ============================================================
// copy.js — 全站文案层（中英双语总表）
// zh = index.html 内联兜底文案的原样抽取；en = 面向英国读者的英文版。
// 两语言键集合完全一致；元素上的 data-copy / data-copy-aria / data-copy-alt
// 属性按当前语言从这里取值。data.js 的架子条目是专名，不进本表。
// ============================================================
window.COPY = {
  zh: {
    // ---------- 顶部导航 ----------
    "tab.about": "关于我",
    "tab.academic": "学术经历",
    "tab.work": "实践经历",
    "tab.moments": "人生瞬间",

    // ---------- 姓名 / 页面标题 ----------
    "name.full": "赵珮伊",
    "meta.title": "赵珮伊 Peiyi Zhao",

    // ---------- 名片 / 侧栏（page-me 与 sidebar 共用） ----------
    "prof.affil": "复旦大学-伦敦政治经济学院（LSE）<br>全球媒介与传播双学位 2026 级硕士生<br>CSC 国际组织后备人才培养项目学员",
    "prof.base": "🇨🇳 北京 · 上海　🇬🇧 伦敦　🇺🇳 待定",
    "prof.skills": "AI Native · 产品营销 · 内容策划 · 用户洞察 · 数据分析",

    // ---------- 关于我 · hero ----------
    "hero.lead": "<strong>Hi 你好，我是珮伊</strong>",
    "hero.p1": "一个穿梭于人文和科技之间的探索者<br>永远不会放弃的事情是和真实的人产生连接，以及对美的追求",
    "hero.bucket.head": "我做过的一些：",
    "hero.bucket.1": "在 Kimi 月之暗面探索 AI 行业最前沿，参与 <strong>K3 开源模型</strong>的 SOTA 时刻",
    "hero.bucket.2": "黑客松 36 小时内完成 AI 软件从 0 到 1，拿下<strong>\"优秀产品奖\"</strong>",
    "hero.bucket.4": "在豆瓣社区分享<strong>文科生 AI 使用经验</strong>，获得 <strong>5500+ 点赞收藏</strong>",
    "hero.bucket.5": "热衷<strong>公益</strong>，兴安盟<strong>支教</strong>、扎根残障社群，创作纪录片、视频报道",
    "hero.tags.label": "关于我",
    "hero.tag.1": "国家二级运动员",
    "hero.tag.2": "8年戏剧观众",
    "hero.tag.3": "Vibe Coder",
    "hero.tag.4": "健身房团课有氧爱好者",
    "hero.tag.5": "纪实影像痴迷者",

    // ---------- 关于我 · 板块标签 ----------
    "tag.about.1": "教育经历",
    "tag.about.1.en": "EDUCATION",
    "tag.about.2": "循环播放中",
    "tag.about.2.en": "On Repeat",
    "tag.about.4": "最佳现场",
    "tag.about.4.en": "Best Live/SHOW",

    // ---------- 关于我 · 教育经历 ----------
    "edu.1.org": "复旦大学新闻学院",
    "edu.1.role": "新闻与传播 硕士",
    "edu.2.org": "伦敦政治经济学院（LSE）",
    "edu.2.role": "全球媒介与传播 硕士",
    "edu.3.org": "中国传媒大学电视学院",
    "edu.3.role": "国际新闻与传播 学士",
    "edu.4.org": "北京市第三十五中学",
    "edu.4.role": "高中",

    // ---------- 关于我 · 架子提示 ----------
    "hint.vinyl": "（横滑拖动 点击可跳转播放器）",
    "hint.drama.pre": "已观看",
    "hint.drama.post": "部现场作品",
    "hint.drama.sub": "以下15部为个人给出的五星佳作",
    "stub.side": "副券",

    // ---------- 学术 · 研究兴趣 ----------
    "tag.academic.1": "研究兴趣",
    "tag.academic.1.en": "Research Interests",
    "aca.int.1.title": "智能传播、媒介治理与青少年社会心态",
    "aca.int.1.p": "AI、智能体进入日常生活后，青少年如何接触、理解与信任它们，技术使用如何塑造社会心态，以及算法治理与未成年人保护如何回应。",
    "aca.int.1.ev": "📝 未成年运动员媒介形象研究<br>🤖 头部 AI 公司用户增长实习的一线观察<br>🧒 面向流动儿童 AI 科普公益的深度扎根（字节跳动跳跳糖公益）",
    "aca.int.2.title": "可及性、数字包容与无障碍传播",
    "aca.int.2.p": "对弱势群体（以残障者为代表）的媒介可及性：接入（数字不平等与可行能力）、体验（人机交互与无障碍信息设计）、参与（媒介融入与自我呈现）。",
    "aca.int.2.ev": "🎓 央视春晚无障碍转播研究（校级优秀毕业论文）<br>♿ IAMCR 包容性传播和残障研究分会独作论文（残障创作者的数字民族志）<br>🧩 北大\"孤独症儿童信息化养育干预\"项目研究助理<br>🤝 残障群体志愿服务 180+ 小时 · IAMCR-ICO 中国秘书处成员",
    "aca.int.3.title": "智能时代的体育与国际传播",
    "aca.int.3.p": "体育是跨语言、跨文化的\"通用语言\"：关注大型赛事的智媒化转播生产、运动员媒介形象的建构与伦理，以及体育在公共外交与国家叙事中的作用。",
    "aca.int.3.ev": "🏅 《媒介与体育》集刊独作论文<br>🤖 NCA 双年会一作论文（AIGC × 体育视听新闻）<br>🎙️ 国际赛事转播协调（杭州亚运会 / 哈尔滨亚冬会 / 短道速滑世锦赛）",

    // ---------- 学术 · 论文与会议 ----------
    "tag.academic.2": "论文与会议",
    "tag.academic.2.en": "Publications",
    "badge.solo": "独立作者",
    "badge.first": "第一作者",
    "aca.pub.1.title": "《\"领奖台上\"到\"聚光灯下\"：中国未成年运动员媒介形象构建中的伦理困境》",
    "aca.pub.1.venue": "《媒介与体育》集刊 2025 年第 2 期（页 99–110）",
    "aca.pub.2.venue": "<a href=\"https://iamcr.org/singapore2025\">IAMCR 2025 年会</a> · 包容性传播和残障研究分会",
    "aca.pub.3.venue": "<a href=\"https://mp.weixin.qq.com/s/-LdNx94oP6MWltTJhZWtTA\">第五届 NCA（全美传播学会）双年会</a> · \"全球化时代的传播、媒介与政府治理\"",
    "aca.pub.4.venue": "<a href=\"https://tvs.cuc.edu.cn/2024/1220/c452a247151/pagem.htm\">NCA 第十届中美传播学者高峰论坛</a>",

    // ---------- 学术 · 课题项目 ----------
    "tag.academic.4": "课题项目",
    "tag.academic.4.en": "Projects",
    "badge.ministerial": "部级项目",
    "badge.contract": "横向课题",
    "badge.acawork": "学术工作",
    "aca.proj.1.title": "\"国际网络视听传播分层、分类、分群叙事体系研究\"（国家广播电视总局部级社科研究项目）",
    "aca.proj.1.venue": "研究成员（项目组唯一本科生）｜2024.01–2024.09",
    "aca.proj.2.title": "\"全媒体视域下广西区域性国际联动传播体系研究\"（广西日报传媒集团委托）",
    "aca.proj.2.venue": "研究成员｜2025.03–2026.03",
    "aca.proj.3.title": "IAMCR-ICO（包容性传播和残障研究分会）中国秘书处成员",
    "aca.proj.3.venue": "协助筹办 IAMCR 残障研究中国区域网络研讨会及 2025 新加坡年会宣推联络｜2024.12 起",
    "aca.proj.4.title": "\"孤独症儿童信息化养育干预研究\"（北京大学人口研究所）",
    "aca.proj.4.venue": "研究助理｜2025.01–2025.04",

    // ---------- 学术 · 本科毕业论文 ----------
    "tag.academic.3": "本科毕业论文",
    "tag.academic.3.en": "Thesis",
    "aca.thesis.title": "《可及之上：央视春晚无障碍融合传播的互动仪式研究》 ",
    "badge.thesis": "校级优秀毕业论文",
    "aca.thesis.p": "以 2025、2026 两届央视春晚无障碍转播（视障版/听障版）为纵向案例，基于柯林斯互动仪式链理论，采用网络民族志和半结构访谈，组建听障社群（53 人）与视障社群（32 人）进行参与式观察，获取有效互动文本 223 条；跨两届春晚访谈残障受访者 16 人。研究发现，感官代偿技术拆除了残障群体进入媒介仪式的宏观屏障，却在微观情境中制造了新的参与分层：技术可及性因残障类型、设备条件与平台适配而并不均衡；传者端的技术整合与受众端的家庭仪式空间之间存在反直觉的张力；残障观众并非被动接收者，而是基于切身经验持续提出替代方案的\"产品洞察者\"。论文提出\"感官代偿式共在\"，尝试拓展互动仪式链理论在残障传播中的应用，并就分轨推流、残健同屏设计、平台内置社交功能、无障碍服务常态化给出实践建议。",

    // ---------- 实践 · 实习与工作 ----------
    "tag.work.1": "实习与工作",
    "tag.work.1.en": "Experience",
    "work.kimi.meta": "<strong>Moonshot AI（Kimi）</strong> · AI 增长运营，2026.01–2026.08",
    "work.kimi.b1": "<strong>核心模型和 Agent 产品宣发：</strong>跟进 K2.5/K2.6/K3 模型与 Kimi Work 桌面端、Kimi Claw（Kimi 版小龙虾）等产品宣发，半年累计发布达人内容 500+ 条、曝光超 5000 万；个人工作完整覆盖达人营销、内容素材制作、用户洞察与竞品分析等板块，并参与抖音、小红书官方账号的内容策划与发布",
    "work.kimi.b2": "<strong>国内全渠道达人营销：</strong>独立完成从达人筛选、建联、Brief 撰写、内容共创、效果追踪和数据复盘全流程，建联 130+ 位 KOL/KOC，投放覆盖小红书、视频号、公众号、抖音、B站、即刻、X 和 YouTube 等平台",
    "work.kimi.b3": "<strong>用户洞察与竞品调研：</strong>搭建竞品调研框架，输出 13 份竞品调研（调研产品如 Claude Code/Cowork、Codex、WorkBuddy 等，模型如 Fable、Image 2.0、Gemini 3.1 Pro、GLM 5.2 等），复盘大规模用户数据和 15+ 期爆款案例，识别痛点场景和可迁移用法，为后续宣发积累弹药",
    "work.kimi.b4": "<strong>内容素材自闭环：</strong>基于 Kimi 模型能力与提示词工程，跑通视频生成、3D 网页、互动游戏等多模态玩法，制作科研、办公、金融投研、设计创意场景多个标杆案例（Showcase）用于官方或达人展示，官方 X 案例单条最高 24 万+ Views，小红书官方 PPT 案例笔记单条 3000+ 赞藏",
    "work.cctv.meta": "<strong>央视环球国际视频通讯社（CCTV+）</strong>，2025.07–2025.09",
    "work.cctv.b1": "<strong>内容制作与本地化：</strong>负责 30+ 条视频新闻的稿件编译与视频制作，内容涵盖文化、科技、社会等领域，面向国内媒体客户分发；参与纪录片《舌尖上的中国 第四季》等重点项目的英译与本地化重制",
    "work.cctv.b2": "<strong>国际舆情监测：</strong>日常跟进法新社、美联社等通讯社及海外主流媒体的报道动向，进行素材挖掘、新闻摘编和事实核查",
    "work.cmg.meta": "<strong>中央广播电视总台创新发展研究中心</strong>，2024.01–2024.04",
    "work.cmg.b1": "<strong>学术联络与跨部门协作：</strong>对接 30+ 位制片人、编导与国内外专家团队，深度参与学术联络工作，确保信息流转的高效与准确",
    "work.cmg.b2": "<strong>内容评审和案例库搭建：</strong>参与总台年度奖项评选的 200+ 份资料编审与复盘，整理台内国际传播优秀案例库；协助撰写行业分析简报 2 份，为战略布局提供信息参考",
    "work.cmg.b3": "<strong>行业前沿洞察与活动落地：</strong>协助中心进行国际传播视听前沿趋势的调研，邀请学界、业界专家进行 AI 赋能内容生产和视频创作系列授课 3 期",

    // ---------- 实践 · 项目与作品 ----------
    "tag.work.2": "项目与作品",
    "tag.work.2.en": "PROJECTS",
    "proj.1.title": "抖音 AI 创变者黑客松",
    "proj.1.sub": "AI 软件 · 视频对话和情绪疗愈 · 优秀产品奖（Top 10%）",
    "alt.proj.1": "Alcheme 帧我 · 黑客松产品海报",
    "proj.2.title": "腾讯 × 中国残联就业项目",
    "proj.2.sub": "整合营销 · 助残就业和科技向善 · 活动曝光 2000 万+",
    "proj.3.title": "纪录片《安能不凡》",
    "proj.3.sub": "导演作品 · 人物纪实 · 青少年跳水运动员",
    "proj.5.title": "综艺短片《汉字实验室》",
    "proj.5.sub": "主持 / 制片 · 和外国友人聊汉字之美",
    "proj.4.title": "英语新闻特稿",
    "proj.4.sub": "残障者互联网就业议题报道 · 英文写作",

    // ---------- 人生瞬间 ----------
    "tag.moments.1": "人生瞬间",
    "tag.moments.1.en": "Moments",
    "moment.1.cap": "毕业晚会，和中传说再见",
    "moment.1.date": "2026.06",
    "moment.2.cap": "在 Kimi 实习的日子",
    "moment.2.date": "2026.04",
    "moment.3.cap": "贵州猴耳天坑，纵身一跃",
    "moment.3.date": "2026.04",
    "moment.4.cap": "参加跨年黑客松",
    "moment.4.date": "2026.01",
    "moment.5.cap": "第三届“媒介与体育”论坛",
    "moment.5.date": "2025.04",
    "moment.7.cap": "哈尔滨亚冬会",
    "moment.7.date": "2025.02",
    "moment.8.cap": "纪录片拍摄中，采访运动员",
    "moment.8.date": "2024.10",
    "moment.9.cap": "陪伴心智障碍者跳舞",
    "moment.9.date": "2024.09",
    "moment.10.cap": "内蒙古兴安盟小学支教",
    "moment.10.date": "2024.08",
    "moment.12.cap": "演播室出镜",
    "moment.12.date": "2024.05",
    "moment.13.cap": "校开学典礼节目导演",
    "moment.13.date": "2023.09",
    "moment.14.cap": "英语演讲比赛现场",
    "moment.14.date": "2023.05",

    // ---------- 荣誉 ----------
    "tag.moments.2": "荣誉",
    "tag.moments.2.en": "Honors",
    "hn.1": "国家奖学金",
    "hn.1.y": "2025 · 学业",
    "hn.2": "中国传媒大学优秀毕业生",
    "hn.2.y": "2026 · 学业",
    "hn.3": "中国传媒大学优秀毕业论文",
    "hn.3.y": "2026 · 学业",
    "hn.4": "\"外研社·国才杯\"国际传播赛项全国银奖、北京市金奖",
    "hn.4.y": "2024 · 竞赛",
    "hn.5": "首都高校英语演讲风采大赛三等奖",
    "hn.5.y": "2023 · 竞赛",
    "hn.6": "抖音创变者黑客松优秀产品奖",
    "hn.6.y": "2026 · 开发",
    "hn.7": "国家跳水二级运动员",
    "hn.7.y": "2013 · 体育",

    // ---------- 移动端底部 tab ----------
    "mtab.me": "名片",
    "mtab.about": "关于我",
    "mtab.academic": "学术",
    "mtab.work": "实践",
    "mtab.moments": "瞬间",

    // ---------- aria / 无障碍标签 ----------
    "aria.nav": "板块导航",
    "aria.nav.mobile": "移动端板块导航",
    "aria.theme": "切换深色模式",
    "aria.photo": "赵珮伊照片",
    "aria.vinyl": "最爱的唱片",
    "aria.stubs": "最佳现场票根",
    "aria.langtoggle": "切换到英文",

    // ---------- 页脚 ----------
    "footer.left": "© 2026 赵珮伊 Peiyi Zhao"
  },
  en: {
    // ---------- Top nav ----------
    "tab.about": "About",
    "tab.academic": "Academic",
    "tab.work": "Experience",
    "tab.moments": "Moments",

    // ---------- Name / page title ----------
    "name.full": "Peiyi (Paisley) Zhao",
    "meta.title": "Peiyi (Paisley) Zhao",

    // ---------- Profile card / sidebar ----------
    "prof.affil": "Fudan University – London School of Economics (LSE)<br>Double Master's in Global Media and Communications, Class of 2028<br>Participant in a China Scholarship Council (CSC) international organisation training programme",
    "prof.base": "🇨🇳 Beijing · Shanghai　🇬🇧 London　🇺🇳 TBD",
    "prof.skills": "AI Native · Product Marketing · Content Strategy · User Insight · Data Analytics",

    // ---------- About · hero ----------
    "hero.lead": "<strong>Hi, I'm Peiyi (Paisley)</strong>",
    "hero.p1": "I'm most at home where the humanities meet technology<br>Two things I'll never give up: real human connection, and beauty",
    "hero.bucket.head": "A few things I've done:",
    "hero.bucket.1": "Contributed to launch marketing at Moonshot AI (Kimi), including the <strong>K3 open-source model</strong>",
    "hero.bucket.2": "Built an AI app from scratch in a 36-hour hackathon — won the <strong>Outstanding Product Award</strong>",
    "hero.bucket.4": "Shared <strong>AI tips for humanities students</strong> on Douban, a Chinese culture and discussion platform — <strong>5,500+ likes and saves</strong>",
    "hero.bucket.5": "Long-time <strong>volunteer</strong> — taught in rural Xing'an League, Inner Mongolia, worked with disability communities, and made documentaries and video reports",
    "hero.tags.label": "About me",
    "hero.tag.1": "Diving · China's National Level II athlete qualification",
    "hero.tag.2": "Theatregoer for eight years",
    "hero.tag.3": "Vibe Coder",
    "hero.tag.4": "Group fitness enthusiast",
    "hero.tag.5": "Documentary film buff",

    // ---------- About · section tags ----------
    "tag.about.1": "Education",
    "tag.about.1.en": "EDUCATION",
    "tag.about.2": "On Repeat",
    "tag.about.2.en": "On Repeat",
    "tag.about.4": "Favourite Performances",
    "tag.about.4.en": "Favourite Performances",

    // ---------- About · education ----------
    "edu.1.org": "School of Journalism, Fudan University",
    "edu.1.role": "Master of Journalism and Communication",
    "edu.2.org": "London School of Economics and Political Science (LSE)",
    "edu.2.role": "MSc Global Media and Communications",
    "edu.3.org": "School of Television, Communication University of China",
    "edu.3.role": "BA International Journalism and Communication",
    "edu.4.org": "Beijing No. 35 High School",
    "edu.4.role": "High School",

    // ---------- About · shelf hints ----------
    "hint.vinyl": "(Drag to browse · follow the album title below to listen)",
    "hint.drama.pre": "Seen",
    "hint.drama.post": "live productions",
    "hint.drama.sub": "The 15 below are my personal five-star picks",
    "stub.side": "STUB",

    // ---------- Academic · research interests ----------
    "tag.academic.1": "Research Interests",
    "tag.academic.1.en": "Research Interests",
    "aca.int.1.title": "Intelligent Communication, Media Governance and Youth Social Attitudes",
    "aca.int.1.p": "As AI and intelligent agents enter everyday life: how adolescents encounter, understand and trust them, how technology use shapes social attitudes, and how algorithmic governance and the protection of minors should respond.",
    "aca.int.1.ev": "📝 Research on media representations of underage athletes<br>🤖 First-hand observations from a growth internship at an AI company<br>🧒 AI-literacy volunteering with migrant children through ByteDance's Tiaotiaotang programme",
    "aca.int.2.title": "Accessibility, Digital Inclusion and Accessible Communication",
    "aca.int.2.p": "I study media access, experience and participation, particularly for people with disabilities. This includes digital inequality, human–computer interaction and accessible information design, as well as inclusion and self-representation.",
    "aca.int.2.ev": "🎓 Research on the accessible broadcast of the CCTV Spring Festival Gala (university-level outstanding thesis)<br>♿ Solo-authored paper for IAMCR's Inclusive Communication &amp; Disability section (a digital ethnography of disabled creators)<br>🧩 Research assistant on Peking University's \"digital parenting intervention for children with autism\" project<br>🤝 180+ hours of volunteering with disability communities · Member of the IAMCR-ICO China Secretariat",
    "aca.int.3.title": "Sport and International Communication in the AI Era",
    "aca.int.3.p": "Sport can connect people across languages and cultures. I am interested in AI-enabled production and broadcasting at major sporting events, the representation of athletes and its ethical implications, and sport's role in public diplomacy and national narratives.",
    "aca.int.3.ev": "🏅 Solo-authored paper in the <em>Media &amp; Sport</em> journal series<br>🤖 First-authored paper at the NCA Biennial (AIGC × sports audiovisual news)<br>🎙️ Broadcast coordination at international events (Hangzhou Asian Games / Harbin Asian Winter Games / World Short Track Championships)",

    // ---------- Academic · publications ----------
    "tag.academic.2": "Publications &amp; Conferences",
    "tag.academic.2.en": "Publications",
    "badge.solo": "Sole Author",
    "badge.first": "First Author",
    "aca.pub.1.title": "\"From the Podium to the Spotlight: Ethical Dilemmas in the Media Construction of Underage Athletes in China\"",
    "aca.pub.1.venue": "<em>Media &amp; Sport</em> (journal series), 2025, Issue 2, pp. 99–110",
    "aca.pub.2.venue": "<a href=\"https://iamcr.org/singapore2025\">IAMCR 2025 Annual Conference</a> · Inclusive Communication &amp; Disability Section",
    "aca.pub.3.venue": "<a href=\"https://mp.weixin.qq.com/s/-LdNx94oP6MWltTJhZWtTA\">The 5th NCA Biennial Conference</a> · \"Communication, Media and Governance in the Global Era\"",
    "aca.pub.4.venue": "<a href=\"https://tvs.cuc.edu.cn/2024/1220/c452a247151/pagem.htm\">The 10th NCA China–US Communication Scholars Summit</a>",

    // ---------- Academic · research projects ----------
    "tag.academic.4": "Research Projects",
    "tag.academic.4.en": "Projects",
    "badge.ministerial": "Ministry-Level",
    "badge.contract": "Commissioned",
    "badge.acawork": "Academic Service",
    "aca.proj.1.title": "\"A Tiered, Categorised and Segmented Narrative System for International Online Audiovisual Communication\" (ministerial social-science project, National Radio and Television Administration)",
    "aca.proj.1.venue": "Research team member (the only undergraduate on the team) | Jan–Sep 2024",
    "aca.proj.2.title": "\"A Regional, Coordinated International Communication System for Guangxi in the Omnimedia Era\" (commissioned by Guangxi Daily Media Group)",
    "aca.proj.2.venue": "Research team member | Mar 2025–Mar 2026",
    "aca.proj.3.title": "Member of the China Secretariat, IAMCR-ICO (Inclusive Communication &amp; Disability Section)",
    "aca.proj.3.venue": "Helping organise IAMCR disability-research webinars for the China region, and outreach liaison for the 2025 Singapore conference | since 2024.12",
    "aca.proj.4.title": "\"Digital Parenting Intervention for Children with Autism\" (Institute of Population Research, Peking University)",
    "aca.proj.4.venue": "Research assistant | 2025.01–2025.04",

    // ---------- Academic · undergraduate thesis ----------
    "tag.academic.3": "Undergraduate Thesis",
    "tag.academic.3.en": "Thesis",
    "aca.thesis.title": "\"Beyond Access: An Interaction-Ritual Study of the CCTV Spring Festival Gala's Accessible Broadcast\" ",
    "badge.thesis": "University-Level Outstanding Thesis",
    "aca.thesis.p": "Taking the accessible broadcasts (visually-impaired and hearing-impaired versions) of the 2025 and 2026 CCTV Spring Festival Galas as longitudinal cases, the thesis draws on Collins' interaction ritual chain theory, combining digital ethnography with semi-structured interviews: participant observation in a hearing-impaired community (53 members) and a visually-impaired community (32 members) yielded 223 valid interaction texts, alongside interviews with 16 disabled respondents across the two Galas. It finds that sensory-compensation technology removes the macro barriers keeping disabled audiences out of media rituals, yet creates new stratification in micro situations: accessibility remains uneven across disability types, devices and platform adaptation; counter-intuitive tensions exist between technical integration on the broadcaster side and the domestic ritual space on the audience side; and disabled viewers are not passive recipients but \"product insight-providers\" who keep proposing alternatives from lived experience. The thesis proposes \"sensory-compensated co-presence\", extending interaction ritual chain theory to disability communication, and offers practical recommendations on separate-track streaming, mixed-ability on-screen design, built-in platform social features and the normalisation of accessible services.",

    // ---------- Work · experience ----------
    "tag.work.1": "Experience",
    "tag.work.1.en": "Experience",
    "work.kimi.meta": "<strong>Moonshot AI (Kimi)</strong> · AI Growth Operations, 2026.01–2026.08",
    "work.kimi.b1": "<strong>Model and agent launch marketing:</strong> Contributed to campaigns for the K2.5/K2.6/K3 models, the Kimi Work desktop app and Kimi Claw, with 500+ creator posts and 50M+ impressions over six months. My work spanned creator marketing, content production, user insights and competitor research. I also contributed to content planning and publishing on Kimi's official Douyin and Xiaohongshu accounts",
    "work.kimi.b2": "<strong>Creator outreach and campaign delivery:</strong> Managed the process from creator selection and outreach to briefing, content co-creation, performance tracking and campaign analysis. Established contact with 130+ creators, with campaigns spanning Chinese social platforms as well as X and YouTube",
    "work.kimi.b3": "<strong>User insights and competitor research:</strong> Developed a research framework and produced 13 competitor analyses covering tools such as Claude Code/Cowork, Codex and WorkBuddy, and models such as Fable, Image 2.0, Gemini 3.1 Pro and GLM 5.2. Analysed user data and 15+ reviews of high-performing content to identify audience needs and ideas for future campaigns",
    "work.kimi.b4": "<strong>Product demos and creative production:</strong> Created demos using Kimi's models and prompt engineering, including generated videos, 3D webpages and interactive games. Developed examples for research, office work, financial research and creative design for official channels and creators. One demo shared on Kimi's official X account received 240K+ views; a presentation example on its official Xiaohongshu account received 3,000+ likes and saves",
    "work.cctv.meta": "<strong>CCTV+</strong> (CCTV's global video news agency), 2025.07–2025.09",
    "work.cctv.b1": "<strong>Content production &amp; localisation:</strong> Translated, scripted and edited 30+ video news stories across culture, tech and society for domestic media clients; helped translate and localise flagship projects, including season 4 of the documentary <em>A Bite of China</em>",
    "work.cctv.b2": "<strong>International media monitoring:</strong> Followed daily coverage from wire services (AFP, AP) and major overseas outlets — sourcing material, compiling digests and fact-checking",
    "work.cmg.meta": "<strong>Innovation &amp; Development Research Center, China Media Group (CMG)</strong>, 2024.01–2024.04",
    "work.cmg.b1": "<strong>Academic liaison &amp; coordination:</strong> Coordinated with 30+ producers, directors and experts in China and abroad, keeping communication fast and accurate",
    "work.cmg.b2": "<strong>Content review &amp; case library:</strong> Reviewed and archived 200+ submissions for CMG's annual awards and built an in-house case library of outstanding international-communication work; co-wrote 2 industry briefings to inform strategy",
    "work.cmg.b3": "<strong>Frontier research &amp; events:</strong> Supported research into audiovisual trends in international communication, and organised 3 expert lecture sessions on AI-enabled content production and video creation",

    // ---------- Work · projects ----------
    "tag.work.2": "Projects",
    "tag.work.2.en": "PROJECTS",
    "proj.1.title": "Douyin AI Creator Hackathon",
    "proj.1.sub": "AI app · video conversations and emotional support · Outstanding Product Award (Top 10%)",
    "alt.proj.1": "Alcheme \"Frame Me\" · hackathon product poster",
    "proj.2.title": "Tencent × China Disabled Persons' Federation Employment Project",
    "proj.2.sub": "Integrated marketing · disability employment &amp; tech for good · 20M+ campaign impressions",
    "proj.3.title": "Documentary <em>Born to Excel</em>",
    "proj.3.sub": "Director · portrait documentary about a teenage diver",
    "proj.5.title": "Short Variety Programme <em>The Chinese Character Lab</em>",
    "proj.5.sub": "Host and producer · exploring Chinese characters with international friends",
    "proj.4.title": "English-Language News Feature",
    "proj.4.sub": "A feature on online employment for people with disabilities · written in English",

    // ---------- Moments ----------
    "tag.moments.1": "Moments",
    "tag.moments.1.en": "Moments",
    "moment.1.cap": "Graduation gala at Communication University of China",
    "moment.1.date": "2026.06",
    "moment.2.cap": "Interning at Kimi",
    "moment.2.date": "2026.04",
    "moment.3.cap": "Bungee jump at Hou'er Tiankeng, Guizhou",
    "moment.3.date": "2026.04",
    "moment.4.cap": "At a New Year's hackathon",
    "moment.4.date": "2026.01",
    "moment.5.cap": "The 3rd \"Media &amp; Sport\" Forum",
    "moment.5.date": "2025.04",
    "moment.7.cap": "Harbin Asian Winter Games",
    "moment.7.date": "2025.02",
    "moment.8.cap": "On set for the documentary, interviewing an athlete",
    "moment.8.date": "2024.10",
    "moment.9.cap": "Dancing with people with intellectual disabilities",
    "moment.9.date": "2024.09",
    "moment.10.cap": "Volunteer teaching at a primary school in Xing'an League, Inner Mongolia",
    "moment.10.date": "2024.08",
    "moment.12.cap": "On camera in the studio",
    "moment.12.date": "2024.05",
    "moment.13.cap": "Directing the university opening ceremony",
    "moment.13.date": "2023.09",
    "moment.14.cap": "At an English public-speaking contest",
    "moment.14.date": "2023.05",

    // ---------- Honors ----------
    "tag.moments.2": "Honors",
    "tag.moments.2.en": "Honors",
    "hn.1": "China National Scholarship",
    "hn.1.y": "2025 · Academic",
    "hn.2": "Outstanding Graduate, Communication University of China",
    "hn.2.y": "2026 · Academic",
    "hn.3": "Outstanding Undergraduate Thesis, Communication University of China",
    "hn.3.y": "2026 · Academic",
    "hn.4": "National Silver + Beijing Gold, FLTRP Cup — China's national English communication contest",
    "hn.4.y": "2024 · Competition",
    "hn.5": "Third Prize, Beijing Universities English Public Speaking Contest",
    "hn.5.y": "2023 · Competition",
    "hn.6": "Outstanding Product Award, Douyin AI Creator Hackathon",
    "hn.6.y": "2026 · Dev",
    "hn.7": "National Level II Athlete (Diving)",
    "hn.7.y": "2013 · Sport",

    // ---------- Mobile bottom tabs ----------
    "mtab.me": "Me",
    "mtab.about": "About",
    "mtab.academic": "Academic",
    "mtab.work": "Work",
    "mtab.moments": "Moments",

    // ---------- aria labels ----------
    "aria.nav": "Section navigation",
    "aria.nav.mobile": "Mobile section navigation",
    "aria.theme": "Toggle dark mode",
    "aria.photo": "Photo of Peiyi Zhao",
    "aria.vinyl": "Favourite records",
    "aria.stubs": "Ticket stubs of the best live shows",
    "aria.langtoggle": "Switch to Chinese",

    // ---------- Footer ----------
    "footer.left": "© 2026 Peiyi (Paisley) Zhao"
  }
};
