import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getProductByIdAction } from '../actions/get-product-by-id.action';
import { upsertProductAction } from '../actions/upsert-product.action';
import type { Product } from '@/interfaces/product.interface';

export const useProduct = (id: string) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ['product', { id }],
    queryFn: async () => getProductByIdAction(id),
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: !!id,
  });

  // TODO: Mutation
  const mutation = useMutation({
    mutationFn: upsertProductAction,
    onSuccess: (data: Product) => {
      // invalidar cache
      queryClient.invalidateQueries({ queryKey: ['products'] });
      queryClient.invalidateQueries({ queryKey: ['product', { id: data.id }] });

      // actualizar queryData
      queryClient.setQueryData(['product', { id: data.id }], data);
    },
    onError: (error) => {
      console.error('Error upserting product', error);
    },
  });

  return {
    ...query,
    mutation,
  };
};
