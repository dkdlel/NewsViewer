import React from 'react';
/* Library */

import NewsItem from '../../components/NewsItem';
/* Components */

import styles from './NewsListContainer.module.scss';
/* StyleSheets */

const NewsListContainer = ({ articles }) => {

    return (
        <section className={styles['wrap']}>
            {articles.length === 0
                ? "대기 중..."
                : articles.map(article => (
                    <NewsItem key={article.url} article={article} />
                ))
            }
        </section>
    );
};

export default React.memo(NewsListContainer);