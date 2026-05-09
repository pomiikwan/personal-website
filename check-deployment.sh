#!/bin/bash
echo "=== 📊 GitHub Pages 部署状态检查 ==="
echo ""

# 获取部署状态
STATUS=$(gh api /repos/pomiikwan/personal-website/pages --jq '.status')

echo "当前状态: $STATUS"
echo ""

if [ "$STATUS" = "built" ]; then
    echo "✅ 部署完成！"
    echo ""
    echo "🌐 访问地址："
    echo "   https://pomiikwan.github.io/personal-website/"
elif [ "$STATUS" = "building" ]; then
    echo "🔨 正在构建中..."
    echo "   请稍等片刻，大约还需要1-2分钟"
    echo ""
    echo "💡 提示：30秒后再次运行此脚本查看最新状态"
elif [ "$STATUS" = "deploying" ]; then
    echo "📦 正在部署..."
    echo "   即将完成！"
else
    echo "⚠️  状态未知: $STATUS"
fi

echo ""
echo "📝 查看完整信息："
echo "   https://github.com/pomiikwan/personal-website/deployments"
