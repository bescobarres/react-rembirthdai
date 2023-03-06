import React from 'react';
import PropTypes from 'prop-types';
import styles from './Welcome.module.css';

const Welcome = () => (
  <div className={styles.Welcome} data-testid="Welcome">
    Welcome Component
  </div>
);

Welcome.propTypes = {};

Welcome.defaultProps = {};

export default Welcome;
