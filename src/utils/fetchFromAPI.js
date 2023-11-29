import axios from "axios";

const BASEURL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  url: BASEURL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '6e7233f49emsh0634d3dc1da8c73p1fc570jsn6c2467b6c424',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

// const options = {
    
//     params: {
//       maxResults: 50
//     },
//     headers: {
//       'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//       'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//     }
//   };

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASEURL}/${url}`, options)
    return data
  } catch (error) {
    console.error(error);
  }
    
}