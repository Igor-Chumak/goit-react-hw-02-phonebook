import { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme, theme } from 'styles';
import {
  Header,
  Section,
  CreateThemeSwitcher,
  Phonebook,
  Contacts,
} from 'components';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
    modeTheme: 'light',
  };

  handleToggleTheme = () => {
    this.setState(prevState => {
      return {
        modeTheme: prevState.modeTheme === 'light' ? 'dark' : 'light',
      };
    });
  };

  // onLeaveFeedback = e => {
  //   let stateKey = e.currentTarget.name;
  //   this.setState(prevState => {
  //     return { [stateKey]: prevState[stateKey] + 1 };
  //   });
  // };

  // countTotalFeedback = () => {
  //   return Object.keys(this.state).reduce((previousValue, element) => {
  //     return typeof this.state[element] === 'number'
  //       ? previousValue + this.state[element]
  //       : previousValue;
  //   }, 0);
  // };

  // countPositiveFeedbackPercentage = () => {
  //   return this.state.good > 0
  //     ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
  //     : 0;
  // };

  render() {
    return (
      <ThemeProvider
        theme={{
          ...theme,
          ...(this.state.modeTheme === 'light' ? lightTheme : darkTheme),
        }}
      >
        <GlobalStyles />
        <Header>
          <CreateThemeSwitcher
            handleToggleTheme={this.handleToggleTheme}
            modeTheme={this.state.modeTheme === 'light' ? false : true}
          />
        </Header>
        <main>
          <Section title="Phonebook">
            <Phonebook />
          </Section>
          <Section title="Contacts">
            {/* <Statistics
              state={}
              total={}
              positivePercentage={}
            /> */}
          </Section>
        </main>
      </ThemeProvider>
    );
  }
}
