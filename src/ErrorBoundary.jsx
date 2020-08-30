import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const {
      hasError,
    } = this.state;

    const {
      children,
    } = this.props;

    if (hasError) {
      return (
        <div className='m-t-30 f-column-center'>
          <p className='text-danger m-b-30'>Wystąpił nieoczekiwany błąd.</p>
          <button
            onClick={() => { window.location.href = '/'; }}
            type='button'
          >
            Wróć do strony głównej
          </button>
        </div>
      );
    }
    return children;
  }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};
