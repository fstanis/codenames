import * as React from 'react';
import OriginalWords from '~/words.json';

const WordSetToggle = ({
  words,
  label,
  selected,
  onToggle,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div
      className={ selected ? "btn-wordsettoggle selected" : "btn-wordsettoggle"}
      onClick={onToggle}>
      {label}
    </div>
  );
};

export default WordSetToggle;
