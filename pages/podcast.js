import Helmet from 'react-helmet'
import Layout from '../src/Layout'
import Podcast from '../src/Podcast'
import Header from '../src/Header'
import Footer from '../src/Footer'
import Link from 'next/link'
import Data from '../data'

const PodcastPage = (props) => {
  const current = props.url.query.slug
  const podcast = props.podcasts.filter(p => p.slug === current)[0]
  return (
    <Layout>
      <div className="PodcastPage">
        <Helmet>
          <title>Расписание подкаста {podcast.name} на FrontPod</title>
        </Helmet>
        <Header />
        <Podcast {...podcast} view="large" />
        <Footer />
        <style jsx>{`
          a {
            text-decoration: none;
            color: inherit;
          }
        `}</style>
        <style jsx global>{`
          .PodcastPage {
            display: grid;
            grid-template-rows: 3rem 1fr auto;
            grid-row-gap: 1.6rem;
            min-height: 100vh;
          }
        `}</style>
      </div>
    </Layout>
  )
}

PodcastPage.getInitialProps = () => {
  return Data
}



export default PodcastPage
