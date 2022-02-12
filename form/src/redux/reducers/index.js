const initialState = {
  info: {
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    telephone: "",
    ageRange: "",
  },
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":
      const { id, firstname, lastname, email, telephone, ageRange } =
        action.data;

      const info = {
        id: id,
        firstname: firstname,
        lastname: lastname,
        email: email,
        telephone: telephone,
        ageRange: ageRange,
      };
      return {
        ...state,
        info: info,
      };

    default:
      return state;
  }
}
