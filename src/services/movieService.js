export default class MovieService{
    constructor() {
        const fromLocalStorage = window.localStorage.getItem("movies");
        if(fromLocalStorage) this._movies = JSON.parse(fromLocalStorage)
    }
    _movies = [
        {
            id:0,
            title:"Joker",
            description: "Joker is a 2019 American psychological thriller film directed and produced by Todd Phillips, who co-wrote the screenplay with Scott Silver. The film, based on DC Comics characters. ",
            image:"https://img.cinemablend.com/filter:scale/quill/b/7/8/7/0/9/b78709dcd036c94370781f8e7c106a215a47b80a.jpg?fw=1200",
        }
    ]
    getInitialMovies = () => this._movies;
    likeMovie = (movieId) => () => {
        const index = this._movies.findIndex(({id}) => movieId===id);
        this._movies[index].isLiked = !this._movies[index].isLiked;
        console.log(this._movies);
        window.localStorage.setItem("movies", JSON.stringify(this._movies));
    }
}

console.log(new MovieService());
