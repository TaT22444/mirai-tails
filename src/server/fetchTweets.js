import dotenv from 'dotenv';
dotenv.config();

const API_ENDPOINT = 'https://api.twitter.com/2'; // Twitter API v2 のベースURL
  const BEARER_TOKEN = process.env.X_API_BEARER_TOKEN;

if (!BEARER_TOKEN) {
  console.error('トークンがセットされていません');
  console.log(process.env); // X_API_BEARER_TOKEN が表示されているか確認

} else {
  console.log('Bearer Token:', BEARER_TOKEN);
}

export async function fetchComments(blog_url) {
  const query = `url:"${blog_url}"`;
  const url = `${API_ENDPOINT}/tweets/search/recent?query=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`コメントの取得に失敗しました: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('fetchComments エラー:', error);
    throw error;
  }
}
