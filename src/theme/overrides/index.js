import Card from './Card';
import Button from './Button';
import IconButton from './IconButton';
import LoadingButton from './LoadingButton';
import Paper from './Paper';
import Input from './Input';
import { CssBaseline } from './CssBaseline';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return {
    ...CssBaseline(theme),
    ...Card(theme),
    ...Button(theme),
    ...IconButton(theme),
    ...LoadingButton(theme),
    ...Paper(theme),
    ...Input(theme)
  };
}
