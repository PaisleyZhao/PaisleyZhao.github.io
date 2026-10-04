#!/bin/bash
# 从 index.html 生成 en/index.html（/en/ 英文入口）：
#   1. <head> 后注入 <base href="../">，让 assets/、covers/、copy.js 等相对路径都解析回根目录
#   2. copy.js 之前注入 window.FORCE_LANG='en'，语言优先级里 FORCE_LANG 高于 localStorage
# 用法：bash scripts/build-en.sh（改完 index.html 后重跑一次即可）
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p en
sed -e 's|<head>|<head>\
<base href="../">|' \
    -e 's|<title>赵珮伊 Peiyi Zhao</title>|<title>Peiyi (Paisley) Zhao</title>|' \
    -e 's|<script src="copy.js"></script>|<script>window.FORCE_LANG='"'"'en'"'"';</script>\
<script src="copy.js"></script>|' \
    index.html > en/index.html
echo "生成 en/index.html（$(wc -c < en/index.html | tr -d ' ') bytes）"
grep -c 'base href="../"' en/index.html | xargs -I{} echo "base 注入: {} 处"
grep -c "FORCE_LANG" en/index.html | xargs -I{} echo "FORCE_LANG 注入: {} 处"
