// server/fetchTweets.js
export async function fetchComments(articleUrl) {
  const response = await fetch(
    `https://api.twitter.com/2/tweets/search/recent?query=${encodeURIComponent(articleUrl)}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.X_API_BEARER_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  return data.data || [];
}
