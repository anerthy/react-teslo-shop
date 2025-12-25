import { useQuery } from '@tanstack/react-query';
import { getProductsAction } from '../actions/get-products.action';

export const useProducts = () => {
  // TODO: logica pendiente

  return useQuery({
    queryKey: ['products'],
    queryFn: getProductsAction,
  });
};
