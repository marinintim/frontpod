import Header from '../src/Header'
import Footer from '../src/Footer'
import Week from '../src/Week'
import Data from '../data'

const Index = (props) => {
  return (
    <div className="Index">
      <Header withDescription />
      <Week podcasts={props.podcasts} view="small" />
      <Footer />
      <style jsx global>{`
        html, body {
          
        }
        .Index {
          display: grid;
          grid-template-rows: auto 1fr auto;
          grid-row-gap: 2.6rem;
          min-height: 100vh;
        }

      `}</style>
    </div>
  )
}

Index.getInitialProps = () => {
  return Data
}

export default Index
