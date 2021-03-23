import { createStore } from 'redux';
import counter from "./Counter/reducers";

const store = createStore(counter);
export default store;
