import { Navigate, useNavigate, useParams } from 'react-router';
import { useProduct } from '@/admin/hooks/useProduct';
import { CustomFullScreenLoading } from '@/components/custom/CustomFullScreenLoading';
import { ProductForm } from './ui/ProductForm';
import type { Product } from '@/interfaces/product.interface';
import { toast } from 'sonner';

export const AdminProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, isError, data: product, mutation } = useProduct(id || '');

  const title = id === 'new' ? 'Nuevo producto' : 'Editar producto';
  const subtitle =
    id === 'new'
      ? 'Aquí puedes crear un nuevo producto.'
      : 'Aquí puedes editar el producto.';

  if (isError) {
    return <Navigate to="/admin/products" />;
  }

  if (isLoading) {
    return <CustomFullScreenLoading />;
  }

  if (!product) {
    return <Navigate to="/admin/products" />;
  }

  const handleSubmitForm = async (productLike: Partial<Product>) => {
    await mutation.mutateAsync(productLike, {
      onSuccess: (data) => {
        toast.success('Producto guardado exitosamente', {
          position: 'top-right',
        });
        navigate(`/admin/products/${data.id}`);
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onError: (error) => {
        toast.error('Error al guardar el producto', {
          position: 'top-right',
        });
      },
    });
  };

  return (
    <ProductForm
      title={title}
      subtitle={subtitle}
      product={product}
      onSubmit={handleSubmitForm}
      isPending={mutation.isPending}
    />
  );
};
