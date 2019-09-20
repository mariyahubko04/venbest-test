export function peoplesHasErrored(bool) {
  return {
    type: 'PEOPLES_HAS_ERRORED',
    hasErrored: bool
  };
}

export function peoplesIsLoading(bool) {
  return {
    type: 'PEOPLES_IS_LOADING',
    isLoading: bool
  };
}

export function peoplesData(peoples) {
  return {
    type: 'PEOPLES_FETCH_DATA_SUCCESS',
    peoples
  };
}

export function peoplesFetchData(url) {
  return (dispatch) => {
    dispatch(peoplesIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(peoplesIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((peoples) => dispatch(peoplesData(peoples)))
      .catch(() => dispatch(peoplesHasErrored(true)));
  };
}

export function peoplesFilter(type, requestValue) {
  return {
    type,
    requestValue
  }
}
