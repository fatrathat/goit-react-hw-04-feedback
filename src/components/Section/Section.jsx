import styles from './style.module.css';

const Section = props => (
  <div className={styles.Section}>
    <h1>{props.title}</h1>
    {props.children}
  </div>
);

export default Section;
