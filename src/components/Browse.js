import useNowplayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcoming from '../hooks/useUpcoming';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowplayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcoming();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>

    </div>
  )
}

export default Browse
