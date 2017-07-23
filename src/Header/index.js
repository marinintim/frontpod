const Header = (props) => (
  <header className="header">
    {
      props.withDescription
        ? <h1>FrontPod: расписание подкастов про фронтенд</h1>
        : <h2>FrontPod</h2>
    }
    {props.withDescription && <p>Большинство подкастов выходит по довольно чёткому расписанию, на этой странице собраны русскоязычные подкасты,
      которые так или иначе связаны со фронтендом.
    </p>}
    {props.withDescription && <p>Заметили ошибку или хотите добавить свой подкаст? Присылайте <a href="https://github.com/marinintim/frontpod">пуллреквест</a> или 
       пишите в <a href="https://twitter.com/marinintim">твиттере</a>.
    </p>}
    <style jsx>{`
      h1, h2 {
        font-family: ff-meta-web-pro, Arial, sans-serif;
      }
      h2 {
        margin-top: 0;
        font-size: 1.3rem;
      }
      header {
        padding: 1rem;
      }
    `}</style>
  </header>
)

export default Header
