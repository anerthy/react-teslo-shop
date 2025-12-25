import { AdminTitle } from '@/admin/components/AdminTitle';
import { CustomPagination } from '@/components/custom/CustomPagination';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { currencyFormatter } from '@/lib/currency-formatter';
import { useProducts } from '@/shop/hooks/useProducts';
import { PencilIcon, PlusIcon } from 'lucide-react';
import { Link } from 'react-router';

export const AdminProductsPage = () => {
  const { data } = useProducts();

  return (
    <>
      <div className="flex items-center justify-between">
        <AdminTitle
          title="Productos"
          subtitle="Gestiona los productos de tu tienda"
        />

        <div className="flex justify-end mb-10 gap-4">
          <Link
            to="/admin/products/new"
            className="mb-4 inline-block text-blue-600 hover:underline"
          >
            <Button>
              <PlusIcon />
              Agregar Producto
            </Button>
          </Link>
        </div>
      </div>

      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        <TableCaption>Productos de la tienda</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">ID</TableHead>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Genero</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.products.map((product) => (
            <TableRow>
              <TableCell className="font-medium">{product.slug}</TableCell>
              <TableCell>
                <img
                  src={product.images[0] || 'https://placehold.co/250x250'}
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
              </TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell className="text-right">
                {currencyFormatter(product.price)}
              </TableCell>
              <TableCell>{product.gender}</TableCell>
              <TableCell className="text-right">{product.stock}</TableCell>
              <TableCell>{product.sizes.join(', ')}</TableCell>
              <TableCell className="text-center">
                <Link
                  className="text-blue-600 hover:underline mr-2"
                  to={`/admin/products/${product.id}`}
                >
                  <PencilIcon className="w-4 h-4 text-blue-500" />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CustomPagination totalPages={data?.pages || 1} />
    </>
  );
};
