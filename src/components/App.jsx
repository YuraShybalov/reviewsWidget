import { Component } from 'react';

import Section from './Section/Section';
import Feedback from './Feedback/Feedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div>
        <Section title={'Plisr leawel feedback'}>
          <Feedback options={Object.keys(this.state)} />
        </Section>
      </div>
    );
  }
}
export default App;
