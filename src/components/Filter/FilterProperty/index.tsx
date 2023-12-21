import React from 'react';

import {
    IFilter,
    IFilterOption,
} from '../../../types/filter';
import './filter-property.css';

interface IProps<Property extends keyof IFilter> {
    filter: IFilter;
    onChangeFilter: (filter: IFilter) => void;
    title: React.ReactNode;
    property: Property;
    options: IFilterOption[];
}

export default function FilterProperty<Property extends keyof IFilter>(props: Readonly<IProps<Property>>) {
    const {
        filter,
        onChangeFilter,
        title,
        property,
        options,
    } = props;

    const changeChecked = ({ target: { checked, value }}: React.ChangeEvent<HTMLInputElement>) => {
        const id = parseFloat(value);
        const filterPropertyValue = filter[property];
    
        const newFilterPropertyValue = checked
            ? filterPropertyValue.filter((optionId) => optionId !== id)
            : filterPropertyValue.concat(id);

            onChangeFilter({
                ...filter,
                [property]: newFilterPropertyValue,
            });
    };

    return (
        <div className='property'>
            <div className='title'>
                { title }
            </div>
            <div className='options'>
                {
                    options.map(({ id, text, count }) => (
                        <label
                            key={ id }
                            className='option'
                        >
                            <div>
                                <input
                                    type='checkbox'
                                    checked={ filter[property].includes(id) }
                                    value={ id }
                                    onChange={ changeChecked }
                                />
                                { text }
                            </div>
                            <div>
                                { count }
                            </div>
                        </label>
                    ))
                }
            </div>
        </div>
    );
}
