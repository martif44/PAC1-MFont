import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import Data from './data/Data'


export function App() {
  const MoviesActual = Data.filter((movie) => movie.year == 2026);
  const MoviesRating = Data.filter((movie) => movie.rating >= 8);
  const MoviesGenre = Data.filter((movie) => movie.genre == "XXX");
  const Movies2As = Data.filter((movie) => movie.title.includes("A")); //No esta ben fet

  return (
    <div>
      <Header />
      <List movies={MoviesActual} title={"2026 movies"}/>
      <List movies={MoviesRating} title={"8 or more rating"}/>
      <List movies={MoviesGenre} title={"XXX genere"}/>
      <List movies={Movies2As} title={"Movies with 2 As"}/>
      <Footer />
    </div>
  )
}

export default App