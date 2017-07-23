import Day, {DAYS} from '../Day' 

const Week = (props) => {
  let days = DAYS.map(d => ({
    name: d,
    podcasts: props.podcasts.filter(p => p.day === d)
  }))

  return (
    <main className={`Week_type_${props.view === 'small' ? 'small' : 'large'}`}>
      {days.map(d => (
        <Day small={props.view === 'condensed'} name={d.name} items={d.podcasts} key={d.name} />
      ))}
      <style jsx>{`
        main {
          display: grid;
          grid-column-gap: 1.2rem;
          grid-row-gap: 2rem;
          grid-template-columns: 1fr;
          max-width: 100vw;
          padding: 1rem;
          box-sizing: border-box;
        }
        @media screen and (min-width: 400px) {
          main {
            grid-column-gap: 2rem;
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media screen and (min-width: 1024px) {
          main {
            grid-column-gap: 1.6rem;
            grid-template-columns: repeat(7, 1fr);
          }
        }

      `}</style>
    </main>

  )
}

export default Week
