import React, { /*useCallback,*/ useEffect, useState } from 'react';
import useSWR from 'swr';
/* Library */

import Categories from '../containers/Categories/CategoriesContainer';
import NewsListContainer from '../containers/News/NewsListContainer';
/* Containers */

import { requestGetArticles } from '../api/News';
/* API */

const NewsPage = ({ match }) => {

    const category = match.params.category || 'all';

    const [articles, setArticles] = useState([]);

    const { data, error } = useSWR([category], requestGetArticles);
    useEffect(() => {
        if (!data) setArticles([]);
        else if (error) console.log('error');
        else setArticles(data.articles);
    }, [data, error])

    // swr 사용전
    // const requestArticles = useCallback(async (category) => {
    //     setArticles([]);
    //     const { articles } = await requestGetArticles(category);
    //     setArticles(articles);
    // }, []);

    // useEffect(() => {
    //     try {
    //         requestArticles(category);
    //     } catch (e) {
    //         console.log('error')
    //     }
    // }, [category, requestArticles]);

    return (
        <>
            <Categories category={category} />
            <NewsListContainer articles={articles} />
        </>
    );
};

export default NewsPage;