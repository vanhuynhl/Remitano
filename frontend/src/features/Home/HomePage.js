import React, { useEffect } from 'react';
import { MovieRow } from '../_featureComponent/MovieRow'
import { useDispatch, useSelector } from "react-redux";
import { getMovieList, selectMovieData } from '../Movie/MovieSlice'

const MyComponent = () => {
    const dispatch = useDispatch()
    const movieList = useSelector(selectMovieData)
    useEffect(() => {
        dispatch(getMovieList())
    }, [dispatch]);
    
    return (
        <>
            {
                movieList.length > 0
                    ? movieList.map(
                        (value, index) => {
                            return <MovieRow key={index} data={value}/>
                        }
                    )
                    : null
            }
        </>
    );
};

export default MyComponent;
