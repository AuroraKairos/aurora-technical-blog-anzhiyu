var posts=["2025/02/22/Hexo·博客编写手册/","2025/02/23/环境安装·Git/","2025/02/23/环境安装·Node.js/","2025/02/23/Hexo·部署安知鱼主题/","2025/02/24/技术提升·LeetCode题库/","2025/02/24/生活·健康指南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };