import { tesloApi } from '@/api/teslo-api';
import type { Product } from '@/interfaces/product.interface';

export const getProductByIdAction = async (id: string): Promise<Product> => {
  if (!id) throw new Error('Product ID is required');

  if (id === 'new') {
    return {
      id: 'new',
      slug: '',
      title: '',
      description: '',
      price: 0,
      images: [],
      stock: 0,
      sizes: [],
      gender: 'unisex',
      tags: [],
    } as unknown as Product;
  }

  const { data } = await tesloApi.get<Product>(`/products/${id}`);

  return {
    ...data,
    images: data.images.map((image) =>
      image.startsWith('http')
        ? image
        : `${import.meta.env.VITE_API_URL}/files/product/${image}`
    ),
  };
};
