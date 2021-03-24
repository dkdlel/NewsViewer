import React from 'react';
// import Skeleton from '@material-ui/lab/Skeleton';
/* Library */

import styles from './NewsItem.module.scss';
/* StyleSheets */

const NewsItem = ({ article }) => {

    const { title, description, url, urlToImage } = article;

    return (
        // 스켈레톤 사용전
        <section className={styles['wrap']} >
            {urlToImage
                && (<div className={styles['thumbnail']}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail" />
                    </a>
                </div>)
            }
            <div className={styles['contents']}>
                <h2 className={styles['title']}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p className={styles['description']}>{description}</p>
            </div>
        </section>
        // 스켈레톤 사용
        // <>
        //     {article.title !== ""
        //         ? < section className={styles['wrap']} >
        //             {urlToImage && (
        //                 <div className={styles['thumbnail']}>
        //                     <a href={url} target="_blank" rel="noopener noreferrer">
        //                         <img src={urlToImage} alt="thumbnail" />
        //                     </a>
        //                 </div>
        //             )
        //             }
        //             <div className={styles['contents']}>
        //                 <h2 className={styles['title']}>
        //                     <a href={url} target="_blank" rel="noopener noreferrer">
        //                         {title}
        //                     </a>
        //                 </h2>
        //                 <p className={styles['description']}>{description}</p>
        //             </div>
        //         </section >
        //         : <section className={styles['wrap']}>
        //             <Skeleton
        //                 className={styles['thumbnail']}
        //                 variant="rect"
        //                 width={160}
        //                 height={100}
        //                 animation="wave"
        //             />
        //             <div className={styles['contents']}>
        //                 <Skeleton
        //                     variant="rect"
        //                     width={592}
        //                     height={30}
        //                     animation="wave"
        //                 />
        //                 <Skeleton
        //                     className={styles['description']}
        //                     variant="rect"
        //                     width={592}
        //                     height={63}
        //                     animation="wave"
        //                 />
        //             </div>
        //         </section>
        //     }
        // </>
    );
};

export default React.memo(NewsItem);