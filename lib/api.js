const API_KEY = process.env.IMGUR_CLIENT_ID;

export const getMemes = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Client-ID ${API_KEY}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const response = await fetch(
    "https://api.imgur.com/3/album/WZNkJ9o/images",
    requestOptions
  );
  const parsedData = await response.json();
  return parsedData.data;
};
