import { Elem, Key, Props } from "./element"

// new JSX transform
// https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md#detailed-design

export const Fragment = ({ children }: Props) => children

export function jsx(type: Elem["type"], props: Props, key?: Key): Elem {
  return { type, props, key }
}

export namespace JSX {
  export interface IntrinsicElements {
    div: {}
  }
}
