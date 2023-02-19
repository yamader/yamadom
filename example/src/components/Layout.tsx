import { Node } from "yamadom"

export default ({ children }: { children: Node }) => (
  <div>
    {children}
    <footer>&copy; 2023 YamaD</footer>
  </div>
)
