import React, { memo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { syncDemoIncrease, syncDemoDecrease } from './redux/actionCreator';

const mapStateToProps = (state) => ({
  syncDemo: state.syncDemo,
});
const mapDispatchToProps = {
  syncDemoIncrease,
  syncDemoDecrease,
};

function SyncDemo({ syncDemoIncrease, syncDemoDecrease, syncDemo }) {
  return (
    <div>
      <h1>Redux Sync Demo</h1>
      <button onClick={syncDemoIncrease}>+</button>
      <button onClick={syncDemoDecrease}>-</button>
      <div>Number: {syncDemo}</div>
    </div>
  );
}

SyncDemo.propTypes = {
  syncDemoIncrease: PropTypes.func,
  syncDemoDecrease: PropTypes.func,
  syncDemo: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(SyncDemo));
