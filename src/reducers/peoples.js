const reducerPeople = (state, action) => {
  switch (action.type) {
    case 'PEOPLES_IS_LOADING':
      return {
        ...state,
        isLoading: true,
      };

    case 'PEOPLES_HAS_ERRORED':
      return {
        ...state,
        hasErrored: true,
      };

    case 'PEOPLES_FETCH_DATA_SUCCESS':
      return {
        ...state,
        isLoading: false,
        loadedPeoples: action.peoples,
        filterPeoples: action.peoples,
      };

    case 'PEOPLES_FILTER_BY_NAME':
      return {
        ...state,
        valueNameInput: action.requestValue,
        valueWomanChekbox: false,
        valueManChekbox: false,
        valueAgeInput: '',
        valueSurnameInput: '',
        filterPeoples: [...state.loadedPeoples].filter((people) => {
          return (people.name).toLowerCase()
            .includes(action.requestValue
              .toLowerCase()
              .trim());
        }),
      };

    case 'PEOPLES_FILTER_BY_SURNAME':
      return {
        ...state,
        valueSurnameInput: action.requestValue,
        valueWomanChekbox: false,
        valueManChekbox: false,
        valueAgeInput: '',
        valueNameInput: '',
        filterPeoples: [...state.loadedPeoples].filter((people) => {
          return (people.lastname).toLowerCase()
            .includes(action.requestValue
              .toLowerCase()
              .trim());
        }),
      };

    case 'PEOPLES_FILTER_BY_AGE':
      return {
        ...state,
        valueAgeInput: action.requestValue,
        valueNameInput: '',
        valueWomanChekbox: false,
        valueManChekbox: false,
        valueSurnameInput: '',
        filterPeoples: [...state.loadedPeoples].filter((people) => {
          return action.requestValue ? +people.age === +action.requestValue : people;
        }),
      };

    case 'PEOPLES_FILTER_BY_WOMAN':
      return {
        ...state,
        valueWomanChekbox: !state.valueWomanChekbox,
        valueAgeInput: '',
        valueNameInput: '',
        valueManChekbox: false,
        valueSurnameInput: '',
        filterPeoples: [...state.loadedPeoples].filter((people) => {
          return !state.valueWomanChekbox ? people.sex === action.requestValue : people;
        }),
      };

    case 'PEOPLES_FILTER_BY_MAN':
      return {
        ...state,
        valueManChekbox: !state.valueManChekbox,
        valueAgeInput: '',
        valueNameInput: '',
        valueWomanChekbox: false,
        valueSurnameInput: '',
        filterPeoples: [...state.loadedPeoples].filter((people) => {
          return !state.valueManChekbox ? people.sex === action.requestValue : people;
        }),
      };

    default:
      return state;
  }
};

export default reducerPeople;
