import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

export const useQueryParams = () => {
  const {
    location: { search }
  } = useHistory();

  return queryString.parse(search);
};
