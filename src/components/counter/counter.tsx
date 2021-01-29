import { useDispatch } from 'react-redux';
import { increment, decrement } from '../../reducers/counterReducer';
import './counter.scss';

export function Counter() {
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <div className="button" onClick={(e) => dispatch(increment(1))}>
        <span>+</span>
      </div>
      <div className="button" onClick={(e) => dispatch(decrement(1))}>
        <span>-</span>
      </div>
    </div>
  );
}

export default Counter;
