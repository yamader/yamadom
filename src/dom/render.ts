import { Children, ComponentClass, Elem, FC } from "~/index"
import { isClass, notEmpty } from "~/utils"

type DOM = Element | string | null

export function render(node: Children): DOM | DOM[] {
  // ignore "", null, undefined and boolean
  if (!notEmpty(node) || typeof node === "boolean") return null

  // string node
  if (typeof node !== "object") return node + ""

  // Child[]
  if (Array.isArray(node)) return node.flatMap(render)

  const { type, props } = node

  // html node
  if (typeof type === "string") {
    const { children, ...attrs } = props
    const el = document.createElement(type)
    for (const p in attrs)
      if (p.startsWith("on"))
        el.addEventListener(p.slice(2).toLowerCase(), attrs[p])
      else el.setAttribute(p, attrs[p])
    el.append(...[children].flatMap(render).filter(notEmpty))
    return el
  }

  // component node
  const c = renderComponent(type, props)
  return render(c)
}

function renderComponent(type: Elem["type"], props: Elem["props"]) {
  // class component
  if (isClass(type)) {
    const c = new (type as ComponentClass)(props)
    return c.render(c.props, c.state)
  }

  // function component
  else {
    return (type as FC)(props)
  }
}

export function diff(dom: Element | null, node: Children, parent: Element) {
  if (dom) {
    if (!node) return null

    // string node
    if (typeof node !== "object") {
      dom.nodeValue = node + ""
      return dom
    }

    // array
    if (Array.isArray(node)) return []

    const { type, props } = node
  } else {
    const tree = [render(node)].flat().filter(notEmpty)
    parent.append(...tree)
    return tree
  }
}

export function mount(node: Children, parent: Element) {
  diff(null, node, parent)
}
