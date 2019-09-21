import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { peoplesFetchData, peoplesFilter } from '../../actions/peoples';
import PageNotFound from '../views/PageNotFound';
import LoadingPage from '../views/LoadingPage';

const BASIC_URL = 'https://venbest-test.herokuapp.com';

const FILTER_BY_NAME = 'PEOPLES_FILTER_BY_NAME';
const FILTER_BY_SURNAME = 'PEOPLES_FILTER_BY_SURNAME';
const FILTER_BY_AGE = 'PEOPLES_FILTER_BY_AGE';
const FILTER_BY_WOMAN = 'PEOPLES_FILTER_BY_WOMAN';
const FILTER_BY_MAN = 'PEOPLES_FILTER_BY_MAN';


class PeopleList extends React.Component {
  componentDidMount() {
    this.props.fetchData(BASIC_URL);
  }

  render() {
    const {
      hasErrored,
      isLoading,
      filterPeoples,
      peoplesFilter,
      valueNameInput,
      valueSurnameInput,
      valueManChekbox,
      valueWomanChekbox,
      valueAgeInput } = this.props;

    return (
      <div className="people">
        <div className="people__filter">
          <label className="people__filter--label" for="name">
            Имя
            <input
              id="name"
              name="name"
              type="text"
              value={valueNameInput}
              placeholder='Введите имя для поиска'
              autocomplete="off"
              autoFocus
              onChange={(event) => peoplesFilter(FILTER_BY_NAME, event.target.value)}
            />
          </label>
          <label className="people__filter--label" for="surname">
            Фамилия
            <input
              id="surname"
              name="surname"
              type="text"
              placeholder='Введите фамилию для поиска'
              autocomplete="off"
              value={valueSurnameInput}
              onChange={(event) => peoplesFilter(FILTER_BY_SURNAME, event.target.value)}
            />
          </label>
          <label className="people__filter--label" for="old">
            Возраст
            <input
              id="old"
              name="old"
              placeholder='Введите возраст в числовом формате'
              type="number"
              value={valueAgeInput}
              onChange={(event) => peoplesFilter(FILTER_BY_AGE, event.target.value)}
            />
          </label>
          <div className="people__filter--radio-block">
            <span className="people__filter--radio-block-headline">
              Пол
            </span>
            <label for="men">
              <input
                type="checkbox"
                id='men'
                name="gender"
                value="m"
                checked={valueManChekbox}
                onChange={(event) => peoplesFilter(FILTER_BY_MAN, event.target.value)}
              />
              м
            </label>
            <label for="women">
              <input
                type="checkbox"
                id='women'
                name="gender"
                value="f"
                checked={valueWomanChekbox}
                onChange={(event) => peoplesFilter(FILTER_BY_WOMAN, event.target.value)}
              />
              ж
            </label>
          </div>
        </div>

        {
          !isLoading ? (
            hasErrored ? (
              <PageNotFound />
            ) : (
                <ul className="people__section">
                  {filterPeoples.length > 0 ? (
                    filterPeoples.map((people, index) => (
                      <li key={index}>
                        <div>
                          <span>{people.name}</span>
                          &#8194;
                    <span>{people.lastname}</span>
                        </div>
                        <div>Возраст:&#8194;{people.age}</div>
                        <div>Пол:&#8194;{people.sex === 'm' ? "мужской" : "женский"}</div>
                      </li>
                    ))) : (
                      <div>По указанному запросу не найдено данных.</div>
                    )
                  }
                </ul>
              )
          ) : <LoadingPage />
        }
      </div>
    );
  }
}

PeopleList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  peoplesFilter: PropTypes.func.isRequired,
  filterPeoples: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  valueNameInput: PropTypes.string.isRequired,
  valueSurnameInput: PropTypes.string.isRequired,
  valueAgeInput: PropTypes.number.isRequired,
  valueWomanChekbox: PropTypes.bool.isRequired,
  valueManChekbox: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    filterPeoples: state.filterPeoples,
    hasErrored: state.peoplesHasErrored,
    isLoading: state.peoplesIsLoading,
    valueNameInput: state.valueNameInput,
    valueSurnameInput: state.valueSurnameInput,
    valueAgeInput: state.valueAgeInput,
    valueWomanChekbox: state.valueWomanChekbox,
    valueManChekbox: state.valueManChekbox,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(peoplesFetchData(url)),
    peoplesFilter: (type, requestValue) => dispatch(peoplesFilter(type, requestValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
