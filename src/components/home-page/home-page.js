import React from 'react';

const HomePage = () => (
  <React.Fragment>
    <header>
      <h1>Gym marketplace</h1>
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