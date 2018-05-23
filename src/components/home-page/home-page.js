import React from 'react';
import styles from './styles.scss';

const HomePage = () => (
  <React.Fragment>
    <header>
      <h1 className={styles.test}>Gym marketplace</h1>
    </header>
    <section className="actions">
      <button>Browse Workouts</button>
      <button>Browse Nutrition Plans</button>
      <button>Create</button>
    </section>
    <section>
      Trending Workouts
      some fancy boxes
    </section>
  </React.Fragment>
);

export default HomePage;