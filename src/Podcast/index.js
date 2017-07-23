import Link from 'next/link'

const Podcast = (props) => {
  if (props.view === 'small') {
    return (
      <div>
        <img src={props.icon} />
        <Link as={`/podcast/${props.slug}`} href={`/podcast?slug=${props.slug}`}><a>{props.name}</a></Link>
        <style jsx>{`
          img {
            max-height: 1rem;
            display: inline-block;
            margin-right: 0.2rem;
            vertical-align: -0.2rem;
          }
          a {
            text-decoration: none;
            color: #333;
            font-family: ff-meta-web-pro, Arial, sans-serif;
          }
          div {
            word-break: none;
          }
        `}</style>
      </div>
    )
  }

  return (
    <article>
      <header>
        <img src={props.icon} />
        <h1>{props.name}</h1>
        <h2>день выхода: {props.day}</h2>
      </header>
      {
        props.hosts
          ? <p>
              <span className="run-in">Кто</span>
              {props.hosts && props.hosts.length === 1 ? 'ведёт ' : 'ведут '}
              {props.hosts && props.hosts.join(', ').replace(/(.+), (.+)?/, '$1 и $2')}
              .
            </p>
          : ''
      }
      <p className="listen"><span className="run-in">Где слушать</span><a href={props.url}>{props.url}</a>.</p>
      <p><span className="run-in">Описание</span>{props.description || '/* нет описания */ '}</p>
      <style jsx>{`
        article {
          padding: 1rem;
        }

        header {
          display: grid;
          grid-template-columns: 50px 1fr;
          grid-column-gap: .7rem;
        }
        header img {
          display: block;
          padding-bottom: 1rem;
          max-height: 50px;
        }

        header h1 {
          margin-top: .7rem;
          font-family: ff-meta-web-pro, Arial, sans-serif;

        }
        header h2 {
          grid-column: span 2;
          font-family: ff-meta-web-pro, Arial, sans-serif;
          font-weight: normal;
        }

        .listen {
          font-size: 1rem;
        }

        .run-in {
          display: inline-block;
          color: #666;
          margin-right: .7rem;
        }
      `}</style>
    </article>
  )
}

export default Podcast
