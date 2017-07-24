import Helmet from 'react-helmet'
import Typekit from 'react-typekit'

const Layout = (props) => {
  return (
    <div>
      <Helmet>
        <title>FrontPod: расписание фронтенд-подкастов</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Typekit kitId="bvs8svu" />
      {props.children}
    </div>
  )
}

export default Layout
