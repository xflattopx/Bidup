interface UserState {
  userId: number;
  userInfo: {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    isRegistered: boolean,
    registrationMessage: string;
  };
  tokenInfo: {
    jwtToken: string;
  }
  requestHistory: {
    id: number;
    pickupLocation: string;
    dropoffLocation: string;
    description: string;
    preferredDeliveryTime: string;
    priceOffer: number;
    status: string;
  }[];
  submittedRequests: any[]; // Add this line

}

// Initial State
const initialState: UserState = {
  userId: 0,
  userInfo: {
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    isRegistered: false,
    registrationMessage: ''
  },
  tokenInfo: {
    jwtToken: '',
  },
  requestHistory: [],
  submittedRequests: [], // Add this line
};

const userRegistrationReducer = (state = initialState, action: any): UserState => {
  switch (action.type) { // Use action.type to check the action type
    case 'INSERT_USER_INFO':
      console.log(action.payload);
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          role: action.payload.role
        }
      };
    case 'UPDATE_USER_ID':
      console.log(action.payload);
      return {
        ...state,
        userId: action.payload.userId
      }
      case 'RESET_USER_INFO':
        return {
         
          ...state,
          userInfo: {
           firstName:'',
           lastName:'',
           email:'',
           role:'',
           isRegistered:false,
           registrationMessage:''

          },
          userId: 0,
        };
      case 'STORE_JWT_TOKEN':
        return {
          ...state,
          
          tokenInfo: {
            
            ...state.tokenInfo,
            jwtToken: action.payload.jwtToken,
          }
        }
    default:
      return state;

  }
};

export default userRegistrationReducer;