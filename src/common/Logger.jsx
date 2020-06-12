import get from 'lodash/get';

const ENABLE_CONSOLE = true;

class Logger {
  constructor(config) {
    const enabled = get(config, 'enabled');
    const label = get(config, 'label');
    const important = get(config, 'important');

    this.counter = 0;
    this.config = {
      enabled: enabled || false,
      label: label || 'Logger',
      important: important || false,
    };
  }

  show(title = null, ...msgs) {
    const enabled = get(this, 'config.enabled');
    const label = get(this, 'config.label');
    const important = get(this, 'config.important');
    let counter = get(this, 'counter');

    if (enabled) counter++;

    if (ENABLE_CONSOLE && enabled) {
      let finalLabel = `${counter} - ${label}:`;
      if (important) finalLabel = `\x1b[32m${counter} - ${label}:\x1b[0m`;

      console.log(finalLabel, title, msgs);

      // if (msgs.length > 1) {
      //   msgs.forEach((element) => {
      //     const size = Object.keys(element).length;
      //     if (typeof element == 'object' && size <= 5) {
      //       console.log(finalLabel, title, 'object:');
      //       console.table(element);
      //     } else {
      //       console.log(finalLabel, title, element);
      //     }
      //   });
      // }
    }
  }
}

export default Logger;
