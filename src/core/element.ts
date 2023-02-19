import { ComponentType } from "./component"

export type Key = string | number
export type Child = Elem<any> | string | number | boolean | null | undefined
export type Children = Child | Child[]

export type Props<P = object> = P & { children?: Children }

export interface Elem<P = any> {
  type: ComponentType<P> | string
  props: P
  key?: Key
}
