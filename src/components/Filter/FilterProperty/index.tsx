import React from 'react';

import {
    IFilter,
    IFilterOption,
} from '../../../types/filter';
import './filter-property.css';

const GAP = 8;
const ITEM_HEIGHT = 19;

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
            <div
                className='options'
                style={{ height: options.length * ITEM_HEIGHT + (options.length - 1) * GAP }}
            >
                {
                    options.map(({ id, text, count }, index) => {
                        const checked = filter[property].includes(id);

                        return (
                            <label
                                key={ id }
                                className={ `option ${checked ? 'checked' : ''}` }
                                style={{ top: index * (ITEM_HEIGHT + GAP) }}
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
