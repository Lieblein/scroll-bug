import React from 'react';

import {
    IFilter,
    IFilterOption,
} from '../../types/filter';
import FilterProperty from './FilterProperty';
import './filter.css';

const RM_OPTIONS_COUNT = 3;

const ALL_RM_OPTIONS: IFilterOption[] = [
    { id: 1, text: 'Важный гусь', count: 1 },
    { id: 2, text: 'Щедрый свинтус', count: 5 },
    { id: 3, text: 'Неутомимый сурикат', count: 2 },
    { id: 4, text: 'Вдохновенный опоссум', count: 80 },
    { id: 5, text: 'Ужасный дикобраз', count: 7 },
    { id: 6, text: 'Пылкая муха', count: 1 },
    { id: 7, text: 'Союзный аллигатор', count: 99 },
    { id: 8, text: 'Лавандовый слон', count: 3 },
    { id: 9, text: 'Буйная черепаха', count: 11 },
    { id: 10, text: 'Королевская капибара', count: 1 },
];

const LEVEL_OPTIONS: IFilterOption[] = [
    { id: 4, text: 'L0', count: 0 },
    { id: 1, text: 'L1', count: 0 },
    { id: 2, text: 'L2', count: 20 },
    { id: 3, text: 'L3', count: 5 },
];

export default function Filter() {
    const [filter, setFilter] = React.useState<IFilter>({ rm: [], level: [] });

    const [rmOptionsOffset, setRMOptionsOffset] = React.useState(0);

    const changeLevel = (filter: IFilter) => {
        setFilter(filter);

        let newOffset = rmOptionsOffset + 1;
        if (newOffset >= ALL_RM_OPTIONS.length - RM_OPTIONS_COUNT) {
            newOffset = 0;
        }
        setRMOptionsOffset(newOffset);
    };

    return (
        <div className='filter'>
            <FilterProperty
                filter={ filter }
                onChangeFilter={ setFilter }
                title='RM'
                property='rm'
                options={ ALL_RM_OPTIONS.slice(rmOptionsOffset, rmOptionsOffset + RM_OPTIONS_COUNT) }
            />
            <FilterProperty
                filter={ filter }
                onChangeFilter={ changeLevel }
                title='Level'
                property='level'
                options={ LEVEL_OPTIONS }
            />
        </div>
    );
}
