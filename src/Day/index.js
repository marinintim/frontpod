import Podcast from '../Podcast'
const Day = (props) => {
  return (
    <div className="day">
      <h2>{props.small ? SHORT_DAYS[props.name] : props.name}</h2>
      {
        props.items.length > 0
          ? <ul>{
              props.items.map((item, i) => (
                <li key={i}><Podcast view="small" {...item} /></li>
              ))
            }</ul>
          : <p>Нет</p>
      
      }
     <style jsx>{`
        h2 {
          font-size: inherit;
          font-family: futura-pt-bold, Arial, sans-serif;
        }
        ul {
          list-style: none;
          padding-left: 0;
        }

        p {
          font-size: 1rem;
          font-family: Helvetica Neue, Arial, sans-serif;
        }
      `}</style>
    </div>
  )
}

export default Day

export const DAYS = 'понедельник вторник среда четверг пятница суббота воскресенье'.split(' ')
export const SHORT_DAYS = 'пн вт ср чт пт сб вс'
  .split(' ')
  .reduce((acc, val, ind) => {
    acc[DAYS[ind]] = val
    return acc
  }, {})
