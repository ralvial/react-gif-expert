import { useEffect, useState } from 'react';
import getGifs from '../helpers/getGifs';


const useFetchGifs = ( category ) => {

    const [images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState( true );

    const getImages = async () => {
        const newImages = await getGifs(category);
        setimages(newImages);
        setisLoading( false );
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
  
}

export default useFetchGifs