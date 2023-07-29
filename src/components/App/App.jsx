import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme, theme } from 'styles';
import {
  Header,
  Section,
  CreateThemeSwitcher,
  ContactForm,
  ContactList,
  Notification,
  Filter,
} from 'components';

const INITIAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'AAA', number: '3333333' },
];

export class App extends Component {
  state = {
    contacts: [...INITIAL_STATE],
    filter: '',
    modeTheme: 'light',
    notification: false,
  };

  handleToggleTheme = () => {
    this.setState(prevState => {
      return {
        modeTheme: prevState.modeTheme === 'light' ? 'dark' : 'light',
      };
    });
  };

  onSubmit = dataForm => {
    this.formatDataState(dataForm);
    const searchResult = this.searchContact(dataForm);
    console.log('searchResult: ', searchResult);
    if (!searchResult) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { id: nanoid(), ...dataForm }],
      }));
      return true;
    } else {
      alert(
        `${searchResult.name} : ${searchResult.number} is already in contacts`
      );
      return false;
    }
  };

  formatDataState = dataForm => {
    Object.keys(dataForm).map(i => (dataForm[i] = dataForm[i].trim()));
  };

  searchContact = ({ name }) => {
    const { contacts } = this.state;
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  handleChangeInputFilter = e => {
    const { value } = e.target;
    let valueNormalize = value.toLowerCase();
    e.target.value = valueNormalize;
    this.setState({
      filter: valueNormalize,
    });
  };

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
            {this.state.notification && (
              <Notification message="There is no feedback" />
            )}
          </Section>
          <Section title="Contacts">
            <Filter handleChangeInputFilter={this.handleChangeInputFilter} />
            <ContactList contactsList={this.state.contacts} />
          </Section>
        </main>
      </ThemeProvider>
    );
  }
}
