import React from 'react';
/* Library */

import NewsItem from '../../components/NewsItem';
/* Components */

import styles from './NewsListContainer.module.scss';
/* StyleSheets */

const NewsListContainer = ({ articles }) => {

    return (
        // 스켈레톤 사용 전
        // <section className={styles['wrap']}>
        //     {articles.map(article => (
        //             <NewsItem key={article.url} article={article} />
        //         ))}
        // </section>
        <section className={styles['wrap']}>
            {articles.length !== 0
                ? articles.map(article => (
                    <NewsItem key={article.url} article={article} />
                ))
                : <NewsItem article={{ title: '' }} />
            }
        </section>
    );
};

export default React.memo(NewsListContainer);