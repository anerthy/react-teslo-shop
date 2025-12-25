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
import { PlusIcon } from 'lucide-react';
import { Link } from 'react-router';

export const AdminProductsPage = () => {
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
            <TableHead>Categoria</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>
              <img
                src="https://placehold.co/250x250"
                alt="Product"
                className="w-20 h-20 object-cover rounded-md"
              />
            </TableCell>
            <TableCell>Gorra</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
            <TableCell>Ropa</TableCell>
            <TableCell className="text-right">10</TableCell>
            <TableCell>S, M, L, XL</TableCell>
            <TableCell className="text-right">
              <Link
                className="text-blue-600 hover:underline mr-2"
                to="/admin/products/t-shirt-teslo"
              >
                Editar
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <CustomPagination totalPages={10} />
    </>
  );
};
