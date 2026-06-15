

const MovieDetails = () => {
    const movie = {
        name:"Venom",
        hero:"Tom Hardy",
        director:"Ruben Fleischer",
        year :"2018"
    }
    return (
        <>
            <div>
                <h2>Movie Details</h2>
                <h3>Movie Name - {movie.name}</h3>
                <h3>Hero Name - {movie.hero}</h3>
                <h3>Director Name - {movie.director}</h3>
                <h3>Release Year - {movie.year}</h3>

            </div>
        </>
    )
}
export default MovieDetails