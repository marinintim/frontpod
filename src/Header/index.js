import Link from 'next/link'

const Header = (props) => (
  <header className="header">
    {
      props.withDescription
        ? <h1>FrontPod: расписание подкастов про фронтенд</h1>
        : <h2><Link href="/"><a>FrontPod</a></Link></h2>
    }
    {props.withDescription && <p>Большинство подкастов про фронтенд выходит по довольно чёткому расписанию, вот оно.</p>}
    {props.withDescription && <p>Заметили ошибку или хотите добавить свой подкаст? Присылайте <a href="https://github.com/marinintim/frontpod">пуллреквест</a> или 
       пишите в <a href="https://twitter.com/marinintim">твиттере</a>.
    </p>}
    <style jsx>{`
      h1, h2 {
        font-family: futura-pt-bold, Arial, sans-serif;
      }
      h2 {
        margin-top: 0;
        font-size: 1.3rem;
      }
      header {
        padding: 1rem;
      }

      p {
        font-family: Helvetica Neue, Arial, sans-serif;
        font-size: 1rem;
      }

      h2 a {
        color: inherit;
        text-decoration: none;
      }
    `}</style>
  </header>
)

export default Header
