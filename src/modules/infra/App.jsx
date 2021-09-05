import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './portal/Routes';
import './infra.css';

function App() {
  return (
    <Router basename={'/'}>
      <div id="main">
        <Routes />
      </div>
    </Router>
  );
}

App.propTypes = {
  history: PropTypes.object,
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(memo(App));
