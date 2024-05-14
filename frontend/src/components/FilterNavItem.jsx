import React from 'react';

const FilterNavItem = ({ filter, currentFilter, setFilter, children }) => {
  return (
    <li
      role="presentation"
      className={`nav-item ${filter === currentFilter ? 'active' : ''}`}
      onClick={() => setFilter(filter)}
    >
      <a href="#" className="nav-link">
        {children}
      </a>
    </li>
  );
};

export default FilterNavItem;
