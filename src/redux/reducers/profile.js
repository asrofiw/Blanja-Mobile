const initialStateProfile = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  alertMsg: '',
  statusMsg: '',
  isUpdate: false,
  isErrorUpdate: false,
  updateMsg: '',
  dataProfile: {},
  updateProfile: {},
};

export default (state = initialStateProfile, action) => {
  switch (action.type) {
    case 'GET_PROFILE_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_PROFILE_REJECTED': {
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        isError: true,
        statusMsg: 'Failed',
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_PROFILE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        statusMsg: 'Succes',
        alertMsg: action.payload.data.message,
        dataProfile: action.payload.data.data[0],
      };
    }
    case 'UPDATE_PROFILE_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'UPDATE_PROFILE_REJECTED': {
      return {
        ...state,
        isUpdate: false,
        isLoading: false,
        isErrorUpdate: true,
        statusMsg: 'Failed',
        updateMsg: 'Failed to update data',
      };
    }
    case 'UPDATE_PROFILE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isUpdate: true,
        isSucces: true,
        statusMsg: 'Succes',
        updateMsg: action.payload.data.message,
      };
    }
    case 'CLEAR_MESSAGE': {
      return {
        ...state,
        isLoading: false,
        isUpdate: false,
        isSuccess: false,
        isError: false,
        isErrorUpdate: false,
        alertMsg: '',
        statusMsg: '',
      };
    }
    default: {
      return state;
    }
  }
};
