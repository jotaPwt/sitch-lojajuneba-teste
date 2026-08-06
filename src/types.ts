export type ProductCategory = 'Tênis' | 'Vestuário' | 'Acessórios' | string;

export type ProductStatus = 'disponivel' | 'esgotado' | 'vendido' | 'rascunho';

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: ProductCategory;
  brand: string;
  price: number;
  originalPrice?: number;
  stock: number;
  status: ProductStatus;
  badge?: 'Novo' | 'Seminovo' | 'Limitado' | 'Grail' | string;
  description: string;
  curatorNotes?: string;
  condition?: string;
  size?: string;
  images: string[];
  active: boolean;
  featured?: boolean;
  createdAt: string;
  subtitle?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export type NavPage = 
  | 'home' 
  | 'catalog' 
  | 'product-detail' 
  | 'about' 
  | 'admin-login' 
  | 'admin-dashboard' 
  | 'admin-product-editor';
