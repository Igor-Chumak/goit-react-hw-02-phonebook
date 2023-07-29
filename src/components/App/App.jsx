import { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme, theme } from 'styles';
import {
  Header,
  Section,
  CreateThemeSwitcher,
  ContactForm,
  Contacts,
} from 'components';

const INITIAL_STATE = [];
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   ],

export class App extends Component {
  state = {
    contacts: [...INITIAL_STATE],
    filter: '',
    modeTheme: 'light',
  };

  handleToggleTheme = () => {
    this.setState(prevState => {
      return {
        modeTheme: prevState.modeTheme === 'light' ? 'dark' : 'light',
      };
    });
  };

  handleChangeInput = e => {
    this.setState({
      [name]: value,
    });
  };

  onSubmit = dataForm => {
    console.log('object: ', dataForm);
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
            <ContactForm onSubmit={this.onSubmit} />
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
