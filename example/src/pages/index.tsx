import Layout from "~/components/Layout"
import { Component } from "yamadom"

export default class C extends Component<{}, {}> {
  constructor(props) {
    super(props)
  }

  state = { count: 0 }

  render(props, state) {
    return (
      <div>
        <p>count is: {this.state.count}</p>
        <button
          onClick={() => {
            this.state.count = a
          }}>
          asdf
        </button>
      </div>
    )
  }
}

const def = () => (
  <>
    <Layout>
      <h1>Example</h1>
      <p>ほげほげ</p>
      <ul>
        {[1, 2, 3].map(i => (
          <li key={i}>i</li>
        ))}
      </ul>
    </Layout>
  </>
)
