import { Product } from 'src/models/product.model';

const ProductsMock: Product[] = [
  {
    id: Math.round(Math.random() * 100),
    name: 'Product 1',
  },
  {
    id: Math.round(Math.random() * 100),
    name: 'Product 2',
  },
  {
    id: Math.round(Math.random() * 100),
    name: 'Product 3',
  },
  {
    id: Math.round(Math.random() * 100),
    name: 'Product 4',
  },
];

export default ProductsMock;
