const callApi = async () => {
  try {
    const key = `563492ad6f91700001000001a67e069dfb06462899ac8ee8ee44cae8`;
    const url = `https://api.pexels.com/v1/search?query=flower&per_page=10`;
    const res = await fetch(url, { headers: { Authorization: key } });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
callApi();
