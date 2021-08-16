export const setLoading = ({dispatchApi, loadingBoolean}) => {
  dispatchApi({type: 'SET_LOADING', payload: loadingBoolean});
};

export const setError = ({dispatchApi, errorMessage}) => {
  dispatchApi({type: 'SET_ERROR', payload: errorMessage});
};

export const errorHandler = ({dispatchApi, errorObject}) => {
  let errorMessage;
  if (errorObject.graphQLErrors[0].extensions.exception.data) {
    errorMessage =
      errorObject.graphQLErrors[0].extensions.exception.data.data[0].messages[0]
        .message ?? 'Unhandled error type.';
  } else {
    errorMessage =
      errorObject.graphQLErrors[0].extensions.exception.output.payload
        .message ?? 'Unhandled error type.';
  }
  setError({dispatchApi, errorMessage});
};
