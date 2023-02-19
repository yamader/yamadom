import { mount } from "yamadom/dom"

import IndexPage from "~/pages/index"

const App = () => (
  <>
    <IndexPage />
  </>
)

mount(<App/>, document.getElementById("root")!)
