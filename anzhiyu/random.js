var posts=["2025/02/23/Hexo·部署anzhiyu主题/","2025/02/22/Hexo·博客编写手册/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };