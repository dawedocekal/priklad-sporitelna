// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { useEffect } from 'react';

import NxWelcome from './nx-welcome';

export function App() {
  useEffect(() => {
    fetch('/api')
      .then(t => t.json())
      .then((d) => console.log(d))
  }, []);
  return (
    <>
      <NxWelcome title="priklad-sporitelna" />

      <div />
    </>
  );
}

export default App;
