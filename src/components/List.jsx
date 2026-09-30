import CardCard from './CardCard'

function List({ movies, title }) {
    return (
        <div>
            <h2>{title}</h2>
            <ul style={{ display: 'flex', flexDirection: 'row' }}>
                {movies.map((movie) => (
                            <li style={{ margin: '10px', listStyle: 'none' }} key={movie.id}>
                             <CardCard movie={movie} />
                            </li>
                        ))}
            </ul>
        </div>
    )
}

export default List