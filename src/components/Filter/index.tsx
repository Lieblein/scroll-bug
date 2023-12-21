import React from 'react';

import {
    IFilter,
    IFilterOption,
} from '../../types/filter';
import FilterProperty from './FilterProperty';
import './filter.css';

const LEVEL_OPTIONS: IFilterOption[] = [
    { id: 1, text: 'L1', count: 0 },
    { id: 2, text: 'L2', count: 20 },
    { id: 3, text: 'L3', count: 5 },
];

export default function Filter() {
    const [filter, setFilter] = React.useState<IFilter>({ rm: [], level: [] });

    return (
        <div className='filter'>
            <FilterProperty
                filter={ filter }
                onChangeFilter={ setFilter }
                title='RM'
                property='rm'
                options={ [] }
            />
            <FilterProperty
                filter={ filter }
                onChangeFilter={ setFilter }
                title='Level'
                property='level'
                options={ LEVEL_OPTIONS }
            />
        </div>
    );
}
