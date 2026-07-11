# 发布前检查

1. 在本地运行 `npm run preview`。
2. 打开 `http://127.0.0.1:4176`，检查中文、英文、移动端和所有链接。
3. 由大川确认内容和排版。
4. GitHub 仓库打开 `Actions`。
5. 选择 `Deploy personal site to Alibaba OSS`，点击 `Run workflow`。
6. 发布后检查 `https://jensenbox.cn` 和 `https://www.jensenbox.cn`。

GitHub Actions 现在只允许手动运行，不会因普通代码推送自动覆盖线上网站。
