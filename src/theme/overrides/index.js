import Button from './Button';
import LoadingButton from './LoadingButton';
import Paper from './Paper';
import Input from './Input';
import { CssBaseline } from './CssBaseline';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return {
    ...CssBaseline(theme),
    ...Button(theme),
    ...LoadingButton(theme),
    ...Paper(theme),
    ...Input(theme)
  };
}
