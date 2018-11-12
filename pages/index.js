import Link from 'next/link'
export default () => (
  <div>
    hell sucks
    <Link href="/about">
      <button>About fucked moron</button>
    </Link>
    <p>scoped</p>
    <div className="suck">
      <img src="/static/sush.png" alt="sush"/>
    </div>
    <div className="fuck">
      <img src="http://livedoor.blogimg.jp/hiro99j/imgs/0/6/06afbfdc-s.jpg" alt="suck"/>
    </div>
    <style jsx>{`
      p {
        color: blue;
      }
      div {
        background: red;
      }
      @media (max-width: 600px) {
        div {
          background: blue;
        }
      }
    `}</style>
  <style global jsx>{`
      body {
        background: black;
      }
    `}</style>
  </div>
)
