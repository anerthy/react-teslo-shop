import { CustomPagination } from '@/components/custom/CustomPagination';
import { CustomJumbotron } from '@/shop/components/CustomJumbotron';
import { ProductGrid } from '@/shop/components/ProductGrid';
import { useProducts } from '@/shop/hooks/useProducts';

export const HomePage = () => {
  const { data } = useProducts();

  return (
    <>
      <CustomJumbotron
        title="Nuestros Productos"
        subtitle="Ropa minimalista y elegante inspirada en el diseño futurista de Tesla. Calidad premium para un estilo atemporal."
      />
      <ProductGrid products={data?.products || []} />
      <CustomPagination totalPages={data?.pages || 0} />
    </>
  );
};
