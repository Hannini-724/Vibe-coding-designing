# BM Wallet 拉新活动落地页

BM Wallet 新用户拉新活动的落地页：用户完成 X（推特）互动、绑定/创建钱包并存入 ≥ $100 等值资产，验证通过后自动进入当天的 100 USDT 抽奖池。页面支持中英文切换。

## 预览

直接双击 `wallet-acquisition-landing.html` 即可在浏览器中打开预览，无需构建或安装依赖。

## 文件结构

| 文件 | 说明 |
| --- | --- |
| `wallet-acquisition-landing.html` | 页面结构（引用下面的 CSS 与 JS） |
| `wallet-acquisition-landing.css` | 全部样式：布局、配色、字体、响应式 |
| `wallet-acquisition-landing.js` | 交互逻辑：中英文切换、表单校验、结果提示（toast） |

三个文件通过相对路径 `./` 相互引用，请保持在**同一目录**、且**文件名不变**。

## 功能

- **中英文切换**：右上角 中 / EN 切换。所有文案由 `wallet-acquisition-landing.js` 顶部的 `translations` 字典驱动，改文案只需改字典。
- **表单校验**：校验钱包地址格式（EVM `0x...` / Solana）与勾选协议，结果以 toast 形式反馈。
- **响应式**：窄屏下双卡上下堆叠、奖池数字横排、活动条重排。

## 字体

英文字体使用 **Alexandria**，通过 HTML `<head>` 中的 Google Fonts 在线引入，中文自动回退到 PingFang SC 等系统字体。页面运行时需要能访问 Google Fonts；若上线环境访问不稳定，建议改为自托管字体文件。

## 说明

当前为静态设计原型：奖池数据、开奖倒计时、中奖记录均为占位内容，需由开发对接真实接口。

## 修改指引

- 改文案：`wallet-acquisition-landing.js` 顶部 `translations` 字典（`zh` / `en`）。
- 改样式：`wallet-acquisition-landing.css`。页面底部集中放置了活动落地页相关的样式覆盖块（`Campaign landing overrides`）。
