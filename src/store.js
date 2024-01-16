import{ reactive } from 'vue';
export const store = reactive({
    UrlPointMovie: 'https://api.themoviedb.org/3/search/movie?api_key=',
    movies: [],
    UrlPointSeries: 'https://api.themoviedb.org/3/search/tv?api_key=',
    series: [],
    UrlPopularMovie: 'https://api.themoviedb.org/3/movie/popular?api_key=',
    PopularMovies: [],
    UrlPopularSeries: 'https://api.themoviedb.org/3/tv/popular?api_key=',
    PopularSeries: [],
    UrlGenersMovie: 'https://api.themoviedb.org/3/discover/movie',
    generi: [],
    genere: '',
    UrlGenersList: 'https://api.themoviedb.org/3/genre/movie/list?api_key=',
    generelist: [],
    keyApi: 'ebb547ab2123b8e09060d57aad2efea6', 
    search: '',
    research: false,
    filter: false,
    view: true,
    user: false,
    selectedUser: '',
})

