import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Header = ({ history }) => {
  const pages = [
    {
      href: '/',
      label: 'Root Page',
    },
    {
      href: '/lazy',
      label: 'Lazy Demo',
    },
    {
      href: '/async',
      label: 'Async Demo',
    },
    {
      href: '/sync',
      label: 'Sync Demo',
    },
  ];
  return (
    <div className="header">
      {pages.map((p, idx) => (
        <button
          key={idx}
          type="button"
          className="nav-btn"
          onClick={() => history.push(p.href)}
        >
          {p.label}
        </button>
      ))}
    </div>
  );
};

Header.defaultProps = {};

Header.propTypes = {
  history: PropTypes.any,
};

Header.displayName = 'Header';

export default withRouter(Header);
