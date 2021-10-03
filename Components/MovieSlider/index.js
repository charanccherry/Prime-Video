import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MovieSlider = props => {
  const settings = {
    dots: false,
    slidesToScroll: 2,
    slidesToShow: 4,
  }
  const {movieList} = props

  return (
    <>
      <Slider {...settings}>
        {movieList.map(eachMovie => (
          <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
        ))}
      </Slider>
    </>
  )
}
export default MovieSlider
