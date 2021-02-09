const initialState = {
    data: [],
    pageInfo: {},
    pageInfoNewest: {},
    isSuccess: false,
    isLoading: false,
    isError: false,
    alertMsg: '',
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'GET_SUBCATEGORY_PENDING': {
        return {
          ...state,
          isLoading: true,
        };
      }
      case 'GET_SUBCATEGORY_REJECTED': {
        return {
          ...state,
          isLoading: false,
          isError: true,
          alertMsg: 'There is an error at request data',
        };
      }
      case 'GET_SUBCATEGORY_FULFILLED': {
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          data: action.payload.data.data,
          pageInfo: action.payload.data.pageInfo,
          alertMsg: action.payload.data.message,
        };
      }
      case 'CLEAR_MESSAGE': {
        return {
          ...state,
          isSuccess: false,
          isLoading: false,
          isError: false,
          alertMsg: '',
        }
      }
      default: {
        return state;
      }
    }
  };
  