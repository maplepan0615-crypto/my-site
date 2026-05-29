const express = require('express');
const app = express();

app.use(express.json());

// POST /api/generate-letter
app.post('/api/generate-letter', async (req, res) => {
  const { answers, questions } = req.body;
  
  try {
    // ここで Anthropic API を呼び出す（APIキーはサーバー側で管理）
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY  // ★ 環境変数から取得
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [{ 
          role: "user", 
          content: `質問と回答: ${JSON.stringify(answers)}...手紙を書いてください` 
        }]
      })
    });

    const data = await response.json();
    const letter = data.content?.[0]?.text || '手紙を生成できませんでした。';
    
    res.json({ letter });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: '手紙を生成できませんでした。' });
  }
});

// POST /api/generate-stats
app.post('/api/generate-stats', async (req, res) => {
  const { age, rem, days } = req.body;
  
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 500,
        messages: [{ 
          role: "user", 
          content: `${age}歳の人が残り${rem}年（${days}日）と知りました。温かい言葉を200〜240文字で...` 
        }]
      })
    });

    const data = await response.json();
    const message = data.content?.[0]?.text || '';
    
    res.json({ message });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: '言葉を生成できませんでした。' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
