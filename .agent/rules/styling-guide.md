---
trigger: model_decision
description: 當我要求「美化」或「優化 UI」時
---

# 請務必嚴格遵守以下由 DESIGN_SYSTEM.md 定義的規則：

1. 寬度約束 (Strict Layout)

Hero/Title 區塊：必須使用 max-w-hero (768px)。
內容/列表區塊：必須使用 max-w-container (1024px)。
禁止使用 max-w-screen-\* 或自訂寬度，除非有極特殊需求。

2. 顏色 Token 應用

文字顏色：主標題用 text-primary，副標題/說明用 text-accent，連結用 text-link。
背景顏色：一律使用 bg-bg (奶白色)。

3. RAW 視覺美學 (No Polish)

禁止圓角：除非我有特別要求，否則所有容器、按鈕、圖片一律使用 rounded-none。
禁止柔和陰影：絕對不要使用 Tailwind 內建的 shadow-md 等具備模糊效果的陰影。
硬陰影 (Hard Shadows)：如需層次感，請使用自訂的 shadow-hard 或 shadow-hard-lg。

4. 字體與排版 (Poster Typography)

大標題：仿照 WebsiteTitle 的邏輯，使用 flex justify-between 讓文字撐滿 max-w-hero 容器。
字距與間距：大型標題使用 tracking-poster。段落之間保持大間距（例如 py-20 或 py-32），營造海報式呼吸感。

Font Weight：只能使用這兩種 `font-normal` and `font-light`

5. 圖片規範

圖片一律使用 object-cover 並盡量維持 aspect-square (正方形)。
禁止幫圖片加上 Border 或 Shadow（除非是 shadow-hard）。
