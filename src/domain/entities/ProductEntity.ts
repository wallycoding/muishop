interface ProductEntity {
  id: string;
  title: string;
  rating: number;
  description: string;
  image: string;
  defaultPrice: string;
  payment: {
    currency: string;
    amount: number;
  };
}

export default ProductEntity;
