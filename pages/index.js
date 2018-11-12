import Layout from '../components/FuckLayout'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>
        {props.title}
      </a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>KILLLIST</h1>
    <ul>
      <PostLink title="hell your moron"/>
      <PostLink title="iconic hazardo"/>
      <PostLink title="bamos uno que"/>
    </ul>
  </Layout>
)
