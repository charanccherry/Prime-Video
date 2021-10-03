import MovieSlider from '../MoviesSlider'

import {
  PrimeVideoContainer,
  Image,
  MoviesContainer,
  MoviesHeading,
} from './styledComponents'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovieList = moviesList.filter(
    movie => movie.categoryId === actionMovie,
  )

  const comedyMovieList = moviesList.filter(
    movie => movie.categoryId === comedyMovie,
  )

  return (
    <PrimeVideoContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <MoviesContainer>
        <MoviesHeading>Action Movies</MoviesHeading>
        <MovieSlider movieList={actionMovieList} />
        <MoviesHeading>Comedy Movies</MoviesHeading>
        <MovieSlider movieList={comedyMovieList} />
      </MoviesContainer>
    </PrimeVideoContainer>
  )
}
export default PrimeVideo
