import css from './Statistics.module.css';
import PropTypes from 'prop-types';

// key={data.id}>
const Statistics =({stats,title}) => {
    return(

<section className={css.statistics}>
  {title && <h2 className={css.title}>{title}</h2>}
  

  <ul className={css.statList}>
    {stats.map(({id,label,percentage}) => (
      <li className={css.item} key={id}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
    ))}
  </ul>
 </section>
    );
}




export default Statistics;

Statistics.propTypes ={
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.exact({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  
  })
  )
};
