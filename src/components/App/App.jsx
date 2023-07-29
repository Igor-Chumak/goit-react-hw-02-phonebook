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

  handleChangeInput = e => {
    const { name, value } = e.target;
    // console.log('e.target >>> ', e.target);
    // console.log('handleChangeInput ', name, ': ', value);
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // console.log(e.currentTarget.elements);
    // let { name } = e.currentTarget.elements;
    // console.log(name);
    console.log(`${form.elements.name.name}:  ${form.elements.name.value}`);
    console.log(`${form.elements.number.name}:  ${form.elements.number.value}`);
    // console.log(`Signed up as: ${this.state.name} tel.${this.state.number}`);
    // Проп который передается форме для вызова при сабмите
    // this.props.onSubmit({ ...this.state });
    form.reset();
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
            <ContactForm
              name={this.state.name}
              number={this.state.number}
              handleChangeInput={this.handleChangeInput}
              handleSubmit={this.handleSubmit}
            />
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
