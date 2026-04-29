# 重構計畫（維持 SvelteKit 路由 group）

## 目標

- 保持既有路由分組 `(main)`、`(epk)` 與 URL。
- 提升維護性：型別化、服務層抽象、共用 UI、減少重複 CSS。
- 提升穩定性：以 lint/check/build 確保基本品質（測試暫緩）。

## 範圍與交付

- 路由與佈局：保留 group，清理 layout 初始化（語言、焦點、view transition）。
- 資料層：將 PocketBase 呼叫移至 `src/lib/services/*`，定義 `src/lib/models/*` 型別。
- UI：共用元件集中 [src/lib/components](cci:7://file:///home/carl/code/sveltekit-sn-offical/src/lib/components:0:0-0:0)；樣式 tokens/變數集中。
- 工具：`src/lib/utils` 放日期/格式化/捲動/焦點等。
- 文件：本檔案 + README 補充開發方式（測試暫緩）。

## 目錄調整建議

- src/
  - routes/
    - (main)/... 保持現有路由
    - (epk)/... 保持現有路由
  - lib/
    - services/（PocketBase 存取，統一錯誤處理）
    - models/（資料介面/型別）
    - components/（共用 UI：Nav、Footer、Card、Modal 等）
    - stores/（語言/全域狀態）
    - utils/（格式化、語言判斷、捲動、焦點等）
    - assets/（icons/images）

## 漸進式步驟

1. 建立 models/services/utils 目錄與骨架，不動現有路由。（完成）
2. 抽出 PocketBase 呼叫至 services，頁面改用服務層（逐頁遷移）。（完成：gigs/photos/products）
3. 抽共用 UI：Navbar/Footer/Card/Modal 等放 components；樣式 tokens 整理。（完成：抽出 main AppNavbar/ScrollHandler、epk components 已在 lib/components）
4. 清理 layout：語言初始化、view-transition、autofocus 放在 `+layout.svelte/ts`。（完成）
5. 增加 lint/check/build gating。（完成）
6. 文件更新：README 加開發指引，本檔更新進度。（完成）

## 風險與對策

- 路由破壞：保持 group 目錄與檔名，遷移前後比對路由表。
- 樣式倒退：截圖對比；漸進抽樣驗證主要頁面。
- 資料錯誤：服務層統一錯誤處理，頁面提供 fallback。
- 語言偵測重複：集中於 layout/init helper，避免每頁 onMount。

## 驗收

- `pnpm lint`、`pnpm check`、`pnpm build` 全通過。
- 主要路由與 UI 無變化；PocketBase 資料載入與空狀態正常。
- 新目錄/服務層無循環依賴，型別檢查無誤（測試暫緩）。
