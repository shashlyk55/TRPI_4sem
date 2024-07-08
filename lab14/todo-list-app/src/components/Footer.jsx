import React from 'react';
import FilterLink from '../containers/FilterLink';
import {TaskTypeFilter, VisibilityFilters} from '../actions';

const Footer = () => (
    <div>
        <div>
            <span>Show: </span>
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>
                All
            </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
                Active
            </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
                Completed
            </FilterLink>
        </div>
    </div>
);

export default Footer;