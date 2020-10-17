export default class MovieService {
    constructor() {
        const fromLocalStorage = window.localStorage.getItem("movies");
        if (fromLocalStorage) this._movies = JSON.parse(fromLocalStorage)
    }

    _movies = [
        {
            id: 0,
            title: "Joker",
            description: "Joker is a 2019 American psychological thriller film directed and produced by Todd Phillips, who co-wrote the screenplay with Scott Silver. The film, based on DC Comics characters. ",
            image: "https://img.cinemablend.com/filter:scale/quill/b/7/8/7/0/9/b78709dcd036c94370781f8e7c106a215a47b80a.jpg?fw=1200",
        },
        {
            id: 1,
            title: "Iron Man",
            description: "Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby.",
            image: "https://i.pinimg.com/originals/28/0f/94/280f9485f68d398384b1bfac102d5da3.jpg",
        },
        {
            id: 2,
            title: "Tenet",
            description: "One of the buzziest movies set to arrive in 2020 is Christopher Nolan‘s Tenet. While much has been revealed in the way of the movie’s cast — Nolan has assembled a crack team in the form of John David Washington",
            image: "https://upload.wikimedia.org/wikipedia/ru/thumb/5/56/Tenet_%28poster%29.jpg/205px-Tenet_%28poster%29.jpg",
        }
    ]
    getInitialMovies = () => this._movies;
    saveToTheLocalStorage = (movies) => window.localStorage.setItem("movies", JSON.stringify(movies))
}

