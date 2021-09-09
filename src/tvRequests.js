const API_KEY = "989a8027930013244e3c2af17088dcac";

const tvrequests = [
  {
    title: "Discover TV Shows",
    url: `/discover/tv?api_key=${API_KEY}`,
    media: "tv",
  },
  {
    title: "Comedy TV Shows",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    media: "tv",
  },
  {
    title: "Adventure TV Shows",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=12`,
    media: "tv",
  },
  {
    title: "Popular in your Region TV Shows",
    url: `/discover/tv?api_key=${API_KEY}&region=IN`,
    media: "tv",
  },
];
export default tvrequests;
