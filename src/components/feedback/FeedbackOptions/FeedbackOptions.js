import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.optionsButton}>
      {options.map(elem => {
        return (
          <li key={elem}>
            <button type="button" name={elem} onClick={onLeaveFeedback}>
              {elem}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;
