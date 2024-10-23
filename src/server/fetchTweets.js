const API_ENDPOINT = 'https://api.twitter.com/2'; // Twitter API v2 のベースURL
const BEARER_TOKEN = process.env.X_API_BEARER_TOKEN;

export async function fetchComments(blog_url) {
  const query = `url:"${blog_url}"`;
  const url = `${API_ENDPOINT}/tweets/search/recent?query=${encodeURIComponent(query)}`;

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

  return await response.json();
}
