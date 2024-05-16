import React from 'react';

const FilterNavItem = ({ filter, currentFilter, setFilter, children }) => {
  return (
    <li
      onClick={() => setFilter(filter)}
    >
      <span className={`todo-status ${filter === currentFilter ? 'active-link' : ''}`}>
        {children}
      </span>
    </li>
  );
};

export default FilterNavItem;
