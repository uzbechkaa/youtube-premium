import axios from "axios";
export const APISEREVICE = {
  async fetching(url, cate) {
    const options = {
      method: "GET",
      url: `https://youtube-v3-alternative.p.rapidapi.com/${url}`,
      params: {
        query: cate ,
        geo: "US",
        lang: "en",
      },
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": process.env.REACT_APP_KEY,
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
  async fetchingVideos(id) {
    const options = {
      method: 'GET',
      url: 'https://youtube-v3-alternative.p.rapidapi.com/video',
      params: {id: id},
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': process.env.REACT_APP_KEY,
        'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      return response;
    } catch (error) {
      console.error(error);
    }
  } ,
  async related(id) {
    const options = {
      method: 'GET',
      url: 'https://youtube-v3-alternative.p.rapidapi.com/related',
      params: {
        id: id ,
        geo: 'US',
        lang: 'en'
      },
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key':process.env.REACT_APP_KEY,
        'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
};
