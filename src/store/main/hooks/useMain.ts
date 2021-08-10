import {useState} from 'react';
import {useStateValue} from '../../../store';
import {loadItems} from '../queries';
import {listItems} from '../actions';

export default () => {
  const [{main}, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);

  const setMainList = async () => {
    setIsLoading(true);
    const response = await loadItems();
    dispatch(listItems(response));
    setIsLoading(false);
  };

  return {
    main,
    isLoading,
    setMainList,
  };
};
