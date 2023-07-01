// 0:常用   1：影音  2：工具  3.ai

var date_url = [
    {
        category: 0,
        web_url: "https://wetab.link/",
        web_name: "webtab",
        web_des: "集成式新标签页",
    },
    {
        category: 0,
        web_url: "https://cupfox.app/",
        web_name: "茶杯狐",
        web_des: "剧集/电影/动漫...",
    },
    {
        category: 2,
        web_url: "https://www.ilovepdf.com/",
        web_name: "pdf格式转换",
        web_des: "在线、免费、pdf格式工具",
    },
    {
        category: 2,   
        web_url: "https://pixabay.com/zh/videos/",
        web_name: "Pixabay",
        web_des: "免费正版高清视频素材库",
    },
    {
        category: 3,
        
        web_url: "https://www.naviai.cn/#term-4939",
        web_name: "AI导航站",
        web_des: "ai在线平台库",
    },
    {
        category: 2,
       
        web_url: "https://tempmail.cn/",
        web_name: "临时邮箱",
        web_des: "邮箱接码",
    },
    {
        category: 2,
        
        web_url: "https://receiveasmsonline.com/zh-cn/",
        web_name: "手机接码",
        web_des: "",
    },
    {
        category: 0,
       
        web_url: "https://cloud.tencent.com/",
        web_name: "腾讯云",
        web_des: "云主机控制台",
    },
    {
        category: 2,
       
        web_url: "https://www.easeconvert.com/",
        web_name: "易转换",
        web_des: "在线格式处理",
    },
    {
        category: 2,
       
        web_url: "https://nav.iowen.cn/",
        web_name: "一为导航",
        web_des: "导航资源站",
    },
    {
        category: 3,
        
        web_url: "https://chat2.fastgpt.me/#/chat",
        web_name: "easyChat",
        web_des: "chatgppt在线_有次数限制",
    },
    {
        category: 0,
       
        web_url: "https://jidrop.com/",
        web_name: "jidrop",
        web_des: "跨屏极传",
    },
    {
        category: 2,
       
        web_url: "https://gitee.com/",
        web_name: "码云",
        web_des: "IT社区和开源平台",
    },
    {
        category: 2,
       
        web_url: "https://github.com/",
        web_name: "github",
        web_des: "代码托管、开源平台",
    },
    {
        category: 2,
       
        web_url: "http://blog.csdn.net/",
        web_name: "csdn",
        web_des: "中国最大的IT社区和服务平台",
    },
    {
        category: 2,
       
        web_url: "https://axutongxue.gitee.io/",
        web_name: "阿虚同学",
        web_des: "资源站",
    },
    {
        category: 2,
       
        web_url: "https://www.freereceivesms.com/",
        web_name: "free_sms",
        web_des: "免费接码",
    },
    {
        category: 2,
       
        web_url: "https://tuostudy.com/",
        web_name: "图欧",
        web_des: "学习资源站",
    },
    {
        category: 3,
       
        web_url: "https://xiezuocat.com/?s=wetab",
        web_name: "秘塔写作猫",
        web_des: "ai写作",
    },
    {
        category: 3,
       
        web_url: "https://www.dbbqb.com/",
        web_name: "逗逗",
        web_des: "在线表情包",
    },
    {
        category: 0,
       
        web_url: "http://www.hurryf.top/",
        web_name: "hurryF_blog",
        web_des: "我的博客",
    },
    {
        category: 0,
       
        web_url: "https://tool.browser.qq.com/whattoeat.html",
        web_name: "今天吃什么",
        web_des: "帮小忙工具箱",
    },
    {
        category: 2,
       
        web_url: "http://www.repanso.com/",
        web_name: "热盘搜",
        web_des: "网盘资源搜索",
    },
    {
        category: 1,
       
        web_url: "https://v.qq.com/",
        web_name: "腾讯视频",
        web_des: "",
    },
    {
        category: 1,
       
        web_url: "https://www.iqiyi.com/",
        web_name: "爱奇艺",
        web_des: "",
    },
    {
        category: 1,
       
        web_url: "https://youku.com/",
        web_name: "优酷视频",
        web_des: "",
    },
    {
        category: 1,
       
        web_url: "https://www.fangpi.net/",
        web_name: "放屁音乐",
        web_des: "",
    },
]

// // 调试===========================
// module.exports = {
//     date_url
// }
