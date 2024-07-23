import SignUpForm from "../SignUpForm/SignUpForm";

import styles from './App.module.scss';

function App() {
  return (
    <main>
      <section className={styles.wrapper}>
        <SignUpForm />
      </section>
    </main>
  );
}

export default App;
