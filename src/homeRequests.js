const API_KEY = "989a8027930013244e3c2af17088dcac";

const homeRequests = [
  {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    media: "movie",
  },
  {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    media: "movie",
  },
  {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    media: "movie",
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

export default homeRequests;
