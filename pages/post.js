import {withRouter} from 'next/router'
import Layout from '../components/FuckLayout'

const Content = withRouter((props) => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is the moron saying something.</p>
  </div>
))

const Page = (props) => (
  <Layout>
    <Content />
  </Layout>
)

export default Page
