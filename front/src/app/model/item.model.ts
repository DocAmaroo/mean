import {ProductModel} from './product.model';

export interface ItemModel extends ProductModel {
  product: undefined | string;
  qty: number;
}
