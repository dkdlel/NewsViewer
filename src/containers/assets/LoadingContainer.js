import React from 'react';
import { useSelector } from 'react-redux';
/* Library */

import Loading from '../../components/assets/Loading';
/* Components */

const LoadingContainer = () => {
    const isLoading = useSelector(state => state.loading);
    return <Loading open={Object.values(isLoading).reduce((acc, cur) => cur, false)} />
};

export default React.memo(LoadingContainer);