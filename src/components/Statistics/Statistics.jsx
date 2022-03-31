import css from './Statistics.module.css';
// import PropTypes from 'prop-types';

// key={data.id}>
const Statistics =({props}) => {
    return(

<section className={css.statistics}>
  <h2 className={css.title}>Upload stats</h2>

  <ul className={css.statList}>
    <li className={css.item}>
      <span className={css.label}>.docx</span>
      <span className={css.percentage}>4%</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>.mp3</span>
      <span classNames={css.percentage}>14%</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>.pdf</span>
      <span className={css.percentage}>41%</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>.mp4</span>
      <span className={css.percentage}>12%</span>
    </li>
  </ul>
</section>
    );
};
export default Statistics;

// Statistics.propTypes ={

// };
