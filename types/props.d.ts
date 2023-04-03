import type { Banner } from "./banner";
import type { Product } from "./product";

interface InfiniteItems<T = string> {
  [key: string]: T;
}

export interface PageProps {
  params: InfiniteItems;
  searchParams?: any;
}

export interface LayoutProps extends PropsWithChildren {
  params: InfiniteItems;
}

export interface ProductProps {
  product: Product;
}

export interface BannerProps {
  banner: Banner;
}

export interface ProductImagePreviewProps {
  images: string[];
  productName: string;
}

export interface CartActionsProps extends ProductProps {}

export interface PropsWithChildren {
  children: /* ReactElement */ any;
}

export interface CartProductQuantityCounterProps extends PropsWithChildren {
  quantity: number;
  id: string;
}

export interface RemoveItemButtonProps extends PropsWithChildren {
  item: any;
}

export interface CartItemProps extends PropsWithChildren {
  item: any;
}
