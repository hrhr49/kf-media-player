import {useEffect, useRef} from 'react';
import mousetrap from 'mousetrap';
import 'mousetrap/plugins/global-bind/mousetrap-global-bind';

import type {
  Keybindings,
} from '../keybindings';

import {
  COMMANDS,
} from '../commands';

import type {
  Command,
  CommandCallbacks,
} from '../commands';

const useKeybindings = ({
  keybindings,
  commandCallbacks,
}: {
  keybindings: Keybindings,
  commandCallbacks: CommandCallbacks,
}) => {
  const commandCallbacksRef = useRef(commandCallbacks);
  commandCallbacksRef.current = commandCallbacks;

  useEffect(() => {
    COMMANDS.forEach((command: Command) => {
      const keys = keybindings[command];
      if (keys) {
        if (command.startsWith('commandPalette')) {
          mousetrap.bindGlobal(
            keys,
            () => {
              commandCallbacksRef.current[command]?.();
            }
          );
        } else {
          mousetrap.bind(
            keys,
            () => {
              commandCallbacksRef.current[command]?.();
            }
          );
        }
      }
    });

    return () => {
      COMMANDS.forEach((command) => {
        const keys = keybindings[command];
        // TODO
        if (keys) {
          // mousetrap.unbind(keys);
        }
      });
    };
  }, [keybindings]);

};

export {
  useKeybindings,
};
