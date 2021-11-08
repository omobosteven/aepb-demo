import { useState } from 'react';

export const useTableParams = ({ pageSize = 10, page = 1, search = '' } = {}) => {
  const [tableParams, setTableParams] = useState({
    search,
    pageSize,
    page
  });

  return [tableParams, setTableParams];
};
