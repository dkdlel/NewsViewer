import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
/* Library */

import styles from './CategoriesContainer.module.scss';
/* StyleSheets */

const Init = (category) => {
    switch (category) {
        case 'business':
            return 1;
        case 'entertainment':
            return 2;
        case 'health':
            return 3;
        case 'science':
            return 4;
        case 'sports':
            return 5;
        case 'technology':
            return 6;
        default:
            return 0;
    }
}

const Categories = ({ category }) => {

    const history = useHistory();
    const [tabIndex, setTabIndex] = useState(Init(category));
    const onChangeTabIndex = useCallback((event, newValue) => {
        setTabIndex(newValue);
    }, []);

    useEffect(() => {
        switch (tabIndex) {
            case 1:
                return history.push('/business');
            case 2:
                return history.push('/entertainment')
            case 3:
                return history.push('/health');
            case 4:
                return history.push('/science');
            case 5:
                return history.push('/sports');
            case 6:
                return history.push('/technology');
            default:
                return history.push('/');
        }
    }, [tabIndex, history]);

    return (
        <Tabs
            className={styles['tabs']}
            value={tabIndex}
            onChange={onChangeTabIndex}
            TabIndicatorProps={{
                style: {
                    backgroundColor: 'inherit',
                },
            }}
        >
            <Tab className={styles['tab']} label="전체보기" />
            <Tab className={styles['tab']} label="비즈니스" />
            <Tab className={styles['tab']} label="엔터테인먼트" />
            <Tab className={styles['tab']} label="건강" />
            <Tab className={styles['tab']} label="과학" />
            <Tab className={styles['tab']} label="스포츠" />
            <Tab className={styles['tab']} label="기술" />
        </Tabs>
    );
};

export default Categories;