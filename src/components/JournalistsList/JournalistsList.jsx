import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import JournalistItem from './JournalistItem';

function JournalistsList() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'GET_BRAND_JOURNALISTS' })
    })
    
    return (
        <>
        JOURNALIST LIST 
        <JournalistItem/>
        </>
    )
}

export default JournalistsList;