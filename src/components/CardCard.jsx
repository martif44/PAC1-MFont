

function CardCard({ movie }){
    return(
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <p>{movie.genre}</p>
            <p>{movie.rating}</p>
        </div>
    )
}

export default CardCard