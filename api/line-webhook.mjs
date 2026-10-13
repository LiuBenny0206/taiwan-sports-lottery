import { createHmac, timingSafeEqual } from "node:crypto";

// LINE Messaging API 測試用 Webhook。正式會員紅利查詢尚未上線。
// 任何真實會員紀錄都不可放在這份公開程式碼中。
// 密鑰只從 Vercel Environment Variables 讀取。
const TEST_COMMAND = "紅利查詢測試";

function secureEquals(a, b) {
  const left = Buffer.from(a, "utf8");
  const right = Buffer.from(b, "utf8");
  return left.length === right.length && timingSafeEqual(left, right);
}

function verifySignature(rawBody, signature, secret) {
  if (!signature || !secret) return false;
  const expected = createHmac("sha256", secret)
    .update(rawBody, "utf8")
    .digest("base64");
  return secureEquals(expected, signature);
}

function testFlexMessage() {
  return {
    type: "flex",
    altText: "萬豪會員中心測試：可切換紅利總覽、我的禮券及紅利紀錄（目前尚無真實資料）",
    contents: {
      type: "bubble",
      size: "mega",
      body: {
        type: "box",
        layout: "vertical",
        spacing: "md",
        paddingAll: "22px",
        contents: [
          {
            type: "text",
            text: "萬豪會員中心",
            weight: "bold",
            size: "xl",
            color: "#981B2B"
          },
          {
            type: "text",
            text: "LINE 訊息查詢｜連線測試",
            size: "xs",
            color: "#888888",
            margin: "sm"
          },
          {
            type: "separator",
            margin: "md",
            color: "#E9E3DF"
          },
          {
            type: "text",
            text: "目前尚未綁定會員身分",
            size: "md",
            weight: "bold",
            wrap: true,
            margin: "lg"
          },
          {
            type: "text",
            text: "這是功能測試卡片，沒有顯示任何真實會員點數。正式上線後，每位會員只會看到自己的紅利資料。",
            size: "sm",
            color: "#666666",
            wrap: true
          },
          {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            margin: "lg",
            contents: [
              {
                type: "button",
                style: "primary",
                color: "#981B2B",
                height: "sm",
                action: {
                  type: "postback",
                  label: "紅利總覽",
                  data: "wanhao_demo=overview"
                }
              },
              {
                type: "button",
                style: "secondary",
                height: "sm",
                action: {
                  type: "postback",
                  label: "我的禮券",
                  data: "wanhao_demo=voucher"
                }
              },
              {
                type: "button",
                style: "secondary",
                height: "sm",
                action: {
                  type: "postback",
                  label: "紅利紀錄",
                  data: "wanhao_demo=history"
                }
              }
            ]
          }
        ]
      },
      footer: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "展示模式 · 尚未連接會員資料庫",
            size: "xs",
            align: "center",
            color: "#8A8388"
          }
        ]
      }
    }
  };
}

function replyForEvent(event) {
  if (event?.source?.type !== "user" || !event.replyToken) return null;
  if (event.type === "message" && event.message?.type === "text") {
    if (event.message.text.trim() === TEST_COMMAND) {
      return [testFlexMessage()];
    }
  }
  if (event.type === "postback") {
    const topics = {
      "wanhao_demo=overview": "紅利總覽",
      "wanhao_demo=voucher": "我的禮券",
      "wanhao_demo=history": "紅利紀錄"
    };
    const title = topics[event.postback?.data];
    if (title) {
      return [{
        type: "text",
        text: `【萬豪會員中心｜${title}】\n目前是測試模式，尚未完成會員身分綁定及真實資料查詢。\n正式開放後會在這裡顯示您自己的資料。`
      }];
    }
  }
  return null;
}

async function replyToLine(token, replyToken, messages) {
  const response = await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ replyToken, messages })
  });
  if (!response.ok) {
    // 僅記錄 HTTP 狀態，不記錄 Token、會員 ID 或訊息內容。
    console.error("LINE reply failed", response.status);
  }
}

export async function GET() {
  return new Response(JSON.stringify({
    service: "wanhao-line-webhook",
    status: "ready-for-verification",
    mode: "test-only"
  }), {
    status: 200,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}

export async function POST(request) {
  const secret = process.env.LINE_CHANNEL_SECRET;
  if (!secret) return new Response("Webhook not configured", { status: 503 });

  const rawBody = await request.text();
  if (Buffer.byteLength(rawBody, "utf8") > 256 * 1024) {
    return new Response("Payload too large", { status: 413 });
  }

  const signature = request.headers.get("x-line-signature") || "";
  if (!verifySignature(rawBody, signature, secret)) {
    return new Response("Invalid signature", { status: 401 });
  }

  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const events = Array.isArray(payload.events) ? payload.events : [];
  if (events.length === 0) {
    // LINE Developers 的 Verify 會傳入沒有 events 的 POST。
    return new Response("OK", { status: 200 });
  }

  const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  const requests = [];
  for (const event of events) {
    const messages = replyForEvent(event);
    if (!messages) continue;
    if (!token) {
      console.error("LINE channel access token not configured");
      return new Response("Reply service not configured", { status: 503 });
    }
    requests.push(replyToLine(token, event.replyToken, messages));
  }
  await Promise.allSettled(requests);
  return new Response("OK", { status: 200 });
}
