import React from 'react';
import styles from './styles.scss';
// https://visualpharm.com/free-icons/running-595b40b65ba036ed117d3bb3 

const HomePage = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <h1>Gym marketplace</h1>
    </header>
    <section className={styles.actions}>
      <button>
        <img className={styles.running} src="https://visualpharm.com/assets/945/Running-595b40b65ba036ed117d3bb3.svg"/>
        General Fitness Workouts
      </button>
      <button>
        <img className={styles.bench} src="https://visualpharm.com/assets/530/Bench%20Press-595b40b65ba036ed117d3c4c.svg"/>
        Muscle Building Workouts
      </button>
      <button>
        <img className={styles.plus} src="http://www.clker.com/cliparts/w/w/q/8/l/l/orange-plus-md.png"/>
        Create a Workout
      </button>
    </section>
    <section className={styles.trending}>
      Trending Workouts
      some fancy boxes
    </section>
  </div>
);

export default HomePage;