import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, inputNumber, inputNumberChange } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter
          count={this.props.count}
          count2={this.props.count2}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
          onInputNumber={this.props.onInputNumber}
          onInputNumberChange={this.props.onInputNumberChange}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onInputNumber: () => dispatch(inputNumber()),
    onInputNumberChange: (number) => dispatch(inputNumberChange(number))
  };
}
function mapStateToProps(state) {
  return {
    count: state.count,
    count2: state.count2,
    numberInputted: state.numberInputted
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);