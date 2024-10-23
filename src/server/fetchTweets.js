export async function fetchComments(articleURL) {
  const query = encodeURIComponent(`"${articleURL}"`);
  const url = `https://api.twitter.com/2/tweets/search/recent?query=${query}&tweet.fields=created_at,author_id`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${import.meta.env.X_API_BEARER_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch tweets');
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching tweets:', error);
    return [];
  }
}
