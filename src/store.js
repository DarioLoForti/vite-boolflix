import{ reactive } from 'vue';
export const store = reactive({
    UrlPointMovie: 'https://api.themoviedb.org/3/search/movie?api_key=',
    movies: [],
    UrlPointSeries: 'https://api.themoviedb.org/3/search/tv?api_key=',
    series: [],
    UrlPopularMovie: 'https://api.themoviedb.org/3/movie/popular?api_key=',
    PopularMovies: [],
    keyApi: 'ebb547ab2123b8e09060d57aad2efea6', 
    search: '',
})

