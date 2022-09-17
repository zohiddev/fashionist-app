import { cartActionType, cartInitialState, cartReducer } from "./cartReducer";
import combineReducers from "./combineReducers";
import {
  layoutActionType,
  layoutInitialState,
  layoutReducer,
} from "./layoutReducer";
import CategoriesReducer from "./categoriesReducer";
import ProductsReducer from "./productsReducer";
import SlidesReducer from "./slidesReducer";
import BrandsReducer from "./brandsReducer";
import UserReducer from "./userReducer";
import LangReducer from "./LangReducer";
import SearchReducer from "./searchReducer";
import HeaderReducer from "./headerReducer";

const rootReducer = combineReducers({
  layout: layoutReducer,
  cart: cartReducer,
  categories: CategoriesReducer,
  products: ProductsReducer,
  slides: SlidesReducer,
  brands: BrandsReducer,
  user: UserReducer,
  search: SearchReducer,
  lang: LangReducer,
  header: HeaderReducer,
});

export default rootReducer;
