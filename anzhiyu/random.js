var posts=["2025/02/22/Hexo·博客编写手册/","2025/02/26/Hexo·安知鱼主题-魔改-配置数学公式/","2025/02/23/Hexo·部署安知鱼主题/","2025/03/01/副业探索·AI/","2025/03/01/实用工具·AI/","2025/03/08/理论知识·Element Plus/","2025/02/23/环境安装·Git/","2025/02/27/理论知识·MySQL/","2025/02/27/理论知识·JavaSE/","2025/02/27/技术提升·JavaSE面试宝典/","2025/03/02/理论知识·SpringBoot/","2025/02/23/环境安装·Node.js/","2025/03/05/生活·穿搭指南/","2025/02/27/项目实践·电商mall/","2025/02/24/技术提升·LeetCode题库/","2025/03/01/项目实践·GitHub图床/","2025/02/24/生活·健康指南/","2025/03/02/理论知识·Vue/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };