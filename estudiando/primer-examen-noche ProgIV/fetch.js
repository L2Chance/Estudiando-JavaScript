async function fetchApi(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ERROR: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}

module.exports = fetchApi;
