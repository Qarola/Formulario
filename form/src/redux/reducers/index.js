const initialState = {
  info: {
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    telephone: "",
    ageRange: "",
  },
  airlines: {
    items: [
      { id: "1", name: "Vivair" },
      { id: "2", name: "Avianca" },
      { id: "3", name: "American Airlines" },
      { id: "4", name: "Copa Airlines" },
      { id: "5", name: "Latam" },
    ],
  },
  airSelected: "",
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
    case "SET_AIRSELECTED":
      return {
        ...state,
        airSelected: action.payload,
      };

    default:
      return state;
  }
}
