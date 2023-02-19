import { Elem, Props } from "./element"

export type ComponentType<P> = ComponentClass<P> | FC<P>

export interface ComponentClass<P = object, S = object> {
  new (props: P, ctx?: any): Component<P, S>
}

export abstract class Component<P, S> {
  constructor(public props: Props<P>, public ctx: any) {}

  // todo: いい感じにする
  // @ts-ignore
  public state: S

  setState(state: S) {
    this.state = Object.assign({}, state)
    // diff
  }

  abstract render(props: Props<P>, state: S, ctx?: any): Elem
}

export interface FC<P = object> {
  (props: Props<P>, ctx?: any): Elem | null
}
