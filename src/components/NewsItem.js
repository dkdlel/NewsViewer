import React from 'react';
/* Library */

import styles from './NewsItem.module.scss';
/* StyleSheets */

const NewsItem = ({ article }) => {
    const { title, description, url, urlToImage } = article;

    return (
        <section className={styles['wrap']}>
            {urlToImage && (
                <div className={styles['thumbnail']}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail" />
                    </a>
                </div>
            )}
            <div className={styles['contents']}>
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </section>
    );
};

export default React.memo(NewsItem);