<<<<<<< HEAD
import {ProductModel} from "./product.model";

export interface ItemModel {
  qty: number;
  product: ProductModel;
=======
import {ProductModel} from './product.model';

export interface ItemModel extends ProductModel {
  product: undefined | string;
  qty: number;
>>>>>>> origin/Thominou
}
