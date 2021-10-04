import type {
  Command,
} from './commands';

type Keys = string | string[] | null;
// type Keybindings = Partial<Record<Command, Keys>>;
type Keybindings = Record<Command, Keys>;

export type {
  Keys,
  Keybindings,
}
