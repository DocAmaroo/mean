import {ItemModel} from './item.model';

export interface CartModel {
  items: Array<ItemModel>;
  totalPrice: number;
}

