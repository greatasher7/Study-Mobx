import 'styled-components';
import { TypeMixin, TypeVariable, TypeColor } from '../Styles/Theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    variable: TypeVariable;
    colors: TypeColor;
    mixin: TypeMixin;
  }
}
