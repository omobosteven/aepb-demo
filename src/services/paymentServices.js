import { Api } from 'utils/Api';
import { handleApiError } from 'utils/handleApiError';

const getPayments = async ({ queryKey }) => {
  try {
    const [, params] = queryKey;
    const { pageSize, page, sort, filter } = params;
    const urlParams = {
      'pagination[pageSize]': pageSize,
      'pagination[page]': page,
      sort,
      ...(filter && { ...filter })
    };

    const { data } = await Api.get(`/payments`, { params: urlParams });
    return data;
  } catch (e) {
    throw new Error(handleApiError(e));
  }
};

export const paymentServices = {
  getPayments
};
