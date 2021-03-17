import React, { useCallback, useEffect, useState } from 'react';
/* Library */

import Categories from '../containers/Categories/CategoriesContainer';
import NewsListContainer from '../containers/News/NewsListContainer';
/* Containers */

import { requestGetArticles } from '../api/News';
/* API */

const NewsPage = ({ match }) => {

    const category = match.params.category || 'all';

    const [articles, setArticles] = useState([]);

    const requestArticles = useCallback(async (category) => {
        const data = await requestGetArticles(category);
        setArticles(data);
    }, []);

    useEffect(() => {
        try {
            requestArticles(category);
        } catch (e) {
            console.log('error')
        }
    }, [category, requestArticles]);

    return (
        <>
            <Categories category={category} />
            <NewsListContainer articles={articles} />
        </>
    );
};

export default NewsPage;