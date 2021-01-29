import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import './showCount.scss';

const ShowCount = () => {
  const { counterNumber } = useSelector((state: RootState) => state.Counter);

  return <div className="showcount">{counterNumber}</div>;
};

export default ShowCount;
