# 关威雄个人网站 - 部署指南

> 静态HTML个人网站 - 资产架构师关威雄的在线展示平台

## 🚀 快速部署到GitHub Pages

### 1. 初始化Git仓库

```bash
cd /home/pomii/Work/FinancialTeam/personal/Myself_webside/personal-website
git init
git add .
git commit -m "Initial commit: 个人网站v1.0"
```

### 2. 推送到GitHub

```bash
# 添加远程仓库（替换YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/personal-website.git
git branch -M main
git push -u origin main
```

### 3. 启用GitHub Pages

1. 访问仓库的 **Settings** → **Pages**
2. Source: 选择 `main` 分支，`/ (root)` 目录
3. 点击 **Save**

等待几分钟后，网站将部署到：
```
https://YOUR_USERNAME.github.io/personal-website/
```

## 📁 项目结构

- `index.html` - 首页
- `about.html` - 关于我
- `services.html` - 服务市场
- `cases.html` - 案例研究
- `blog.html` - 博客列表
- `blog-post.html` - 文章详情
- `api-playground.html` - API文档
- `sitemap.xml` - 网站地图
- `robots.txt` - 爬虫规则

## 🎨 本地预览

```bash
python3 -m http.server 8080
```

访问：http://localhost:8080

## 📝 更新内容

```bash
git add .
git commit -m "Update: 描述更改"
git push
```

---

**版本**: v1.0 | **最后更新**: 2025-12-16
