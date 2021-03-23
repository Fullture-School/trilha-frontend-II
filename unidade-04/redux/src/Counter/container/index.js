import { connect } from "react-redux";
import { increment, decrement } from "../actions";
import Counter from "../Counter";

const mapStateToProps = state => {
  return {
    total: state.counter
  };
};

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
