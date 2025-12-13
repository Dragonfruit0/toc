export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface OrderDetails {
  customerName: string;
  email: string;
  address: string;
  phone: string;
  quantity: number;
}