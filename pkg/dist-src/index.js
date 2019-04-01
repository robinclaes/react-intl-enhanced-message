import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

const processMessage = (message, enhancers) => {
  const regex = /<(x:([\da-z_-]+))>(.*?)<\/\1>/gi;
  const output = [];
  let result;
  let key = 0;

  while ((result = regex.exec(message)) !== null) {
    const index = result.index;
    const [match,, label, value] = result;
    output.push(message.substring(0, index));

    if (label in enhancers) {
      output.push(React.createElement(Fragment, {
        key: key++
      }, enhancers[label](value)));
    } else {
      output.push(match);
    }

    message = message.substring(index + match.length, message.length + 1);
    regex.lastIndex = 0;
  }

  output.push(message);
  return output;
};

export const FormattedEnhancedMessage = ({
  enhancers,
  ...props
}) => {
  return React.createElement(FormattedMessage, props, message => processMessage(message, enhancers));
};