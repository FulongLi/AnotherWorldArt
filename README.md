# AnotherWorldArt

《**Another World**》的 AI 概念图展示站，隶属于 **Spirit Connect** 技术路线下的游戏美术与世界观探索。这里集中呈现由 AI 辅助生成的场景、角色与视觉概念，用于统一《Another World》的审美方向。

单页静态站点：打开 `index.html` 即可浏览；画廊支持网格浏览、点击放大、键盘切换与 `#作品id` 链接直达。当前默认仅展示 `images/logo_svg.svg` 标志，其余概念图请自行放入 `images/` 并在 `data` 中登记。

## 本地预览

无需构建。可直接双击打开 `index.html`，或在仓库根目录启动静态服务：

```bash
npx serve .
```

## 添加作品

1. 将图片放入 `images/`（推荐 webp / png / svg）。  
2. 在 `index.html` 的 `data` 数组中增加一项：`id`（唯一，用于网址哈希）、`w`、`h`（像素尺寸，影响比例与布局）、`prompt`（说明文字）、`src`（路径）。  

可选字段 **`thumb`**：列表缩略图；不填则缩略与全屏共用 `src`。

## 部署

将包含 `index.html` 与 `images/` 的目录部署到任意静态托管（如 GitHub Pages）。若需要社交分享预览图，请在 `index.html` 的 `og:image` 中填写站点上的**绝对**图片地址。

## 操作

- 点击画格进入大图模式；**Esc** 或点击两侧空白区域回到网格。  
- 大图模式下 **左右方向键** 切换作品。  
- 访问 `页面地址#作品id` 可打开对应条目。

本仓库代码以 [MIT License](LICENSE) 授权。
