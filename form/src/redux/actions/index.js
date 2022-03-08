export function addUser(data) {
  return {
    type: "ADD_USER",
    data,
  };
}

//function for set the airplane
export function setAirlineAction(airline) { 
  return async(dispatch) => {
      try {
          dispatch(setAirline(airline));
      }
      catch{
          console.log('error');
      }
  }
}

//successfully changed airline
const setAirline = airline => ({
  type: "SET_AIRSELECTED",
  payload: airline
});