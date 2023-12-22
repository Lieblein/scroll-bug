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
            ? filterPropertyValue.concat(id)
            : filterPropertyValue.filter((optionId) => optionId !== id);

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
                    options.map(({ id, text, count }) => {
                        const checked = filter[property].includes(id);

                        return (
                            <label
                                key={ id }
                                className={ `option ${checked ? 'checked' : ''}` }
                            >
                                <div className='option-main'>
                                    <input
                                        type='checkbox'
                                        checked={ checked }
                                        value={ id }
                                        onChange={ changeChecked }
                                    />
                                    { text }
                                </div>
                                <div>
                                    { count }
                                </div>
                            </label>
                        );
                    })
                }
            </div>
        </div>
    );
}
