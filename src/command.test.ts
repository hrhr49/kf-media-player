import {
  COMMANDS,
  commandToTitle,
} from './commands'

// import type {
//   Command,
//   CommandCallbacks,
// } from './commands'

test('all command shoule be match regex /[a-zA-Z][a-zA-Z0-9]*/', () => {
  COMMANDS.forEach((command) => {
    expect(/[a-zA-Z][a-zA-Z0-9]*/.test(command)).toBe(true);
  });
});

test('commandToTitle', () => {
  expect(commandToTitle('fullScreenOn')).toBe('Full Screen On');
  expect(commandToTitle('seekTo90Percent')).toBe('Seek To 90 Percent');
});

