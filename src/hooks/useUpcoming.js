import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpcoming } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcoming = () => {

    const dispatch = useDispatch();

    const getupcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcoming(json.results));
    };

    useEffect(() => {
        getupcomingMovies();
    }, []);
};

export default useUpcoming;

