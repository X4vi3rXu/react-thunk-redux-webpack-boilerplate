import React, { memo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { asyncDemoIncrease, asyncDemoDecrease } from './redux/actionCreator';

const mapStateToProps = (state) => ({
  asyncDemo: state.asyncDemo,
});
const mapDispatchToProps = {
  asyncDemoIncrease,
  asyncDemoDecrease,
};

function AsyncDemo({ asyncDemoIncrease, asyncDemoDecrease, asyncDemo }) {
  return (
    <div>
      <h1>Redux Async Demo</h1>
      <button onClick={asyncDemoIncrease}>+</button>
      <button onClick={asyncDemoDecrease}>-</button>
      <div>Number: {asyncDemo}</div>
    </div>
  );
}

AsyncDemo.propTypes = {
  asyncDemoIncrease: PropTypes.func,
  asyncDemoDecrease: PropTypes.func,
  asyncDemo: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(AsyncDemo));
