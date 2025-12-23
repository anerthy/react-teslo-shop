import { CustomPagination } from '@/components/custom/CustomPagination';
import { CustomJumbotron } from '@/shop/components/CustomJumbotron';
import { ProductGrid } from '@/shop/components/ProductGrid';

export const HomePage = () => {
  return (
    <>
      <CustomJumbotron
        title="Nuestros Productos"
        subtitle="Ropa minimalista y elegante inspirada en el diseño futurista de Tesla. Calidad premium para un estilo atemporal."
      />
      <ProductGrid products={[]} />
      <CustomPagination totalPages={10} />
    </>
  );
};
