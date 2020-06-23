let movies = [
    {id: 1, name: 'Star Wars: A New Hope', rating: 5},
    {id: 2, name: 'Harry Potter: Order of the Phoenix', rating: 4},
    {id: 3, name: 'Lord of the Rings: The Two Towers', rating: 3}
];
let id = 4;

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies);
    },
    getSingleMovie: (req, res) => {
        // console.log(req)
        console.log(req.params)
        console.log(req.query)

        let movie = movies.find(e => e.id === +req.params.id);
        res.status(200).send(movie);
    },
    addMovie: (req, res) => {
        console.log(req.body)

        let newMovie = {
            id: id,
            name: req.body.name,
            rating: req.body.rating
        }

        id++;
        movies.push(newMovie);
        res.status(200).send(movies);
    },
    updateRating: (req, res) => {
        console.log(req.params);
        console.log(req.body);

        let index = movies.findIndex(e => e.id === +req.params.id);
        movies[index].rating = req.body.rating;

        res.status(200).send(movies);
    },
    deleteMovie: (req, res) => {
        console.log(req.params);

        let index = movies.findIndex(e => e.id === +req.params.id);
        if(index !== -1){
            movies.splice(index, 1);
        }

        res.status(200).send(movies);
    }
}