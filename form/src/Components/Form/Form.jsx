import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addUser } from "../../redux/actions";
import { BsFillArrowUpLeftCircleFill } from "react-icons/bs";
import { Alert } from "./Alert";
import uuid from "react-uuid";

//fields validations
function validate(input) {
  let errors = {};
  const patternFirstnameAndLastname = /^([a-zA-Z' ]+)$/;
  const patternEmail = /\S+@\S+\.\S+/;
  const patternPhone = /^[0-9\b]+$/;
  const patternAge = /^[1-9]?[0-9]{1}$|^100$/;

  console.log(input);

  if (!input.firstname) {
    errors.firstname = "First name is required";
  } else if (!patternFirstnameAndLastname.test(input.firstname)) {
    errors.firstname = "First name is invalid";
  } else if (!input.lastname) {
    errors.lastname = "Last name is required";
  } else if (!patternFirstnameAndLastname.test(input.lastname)) {
    errors.lastname = "Last name is invalid";
  }
  if (!input.email || !patternEmail.test(input.email)) {
    errors.email = "Email is required";
  }
  if (!patternEmail.test(input.email)) {
    errors.email = "Email is not valid";
  }
  if (input.telephone.length < 10 || input.telephone.length > 12) {
    errors.telephone = "Telephone number is invalid";
  }
  if (!patternPhone.test(input.telephone)) {
    errors.telephone = "Telephone number is required";
  } else if (!patternAge.test(input.ageRange)) {
    errors.ageRange = "Age is required";
  }
  return errors;
}

export default function Form() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    id: uuid(),
    firstname: "",
    lastname: "",
    email: "",
    telephone: "",
    ageRange: "",
  });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const airSelected = useSelector(state => state.airSelected);



  //Event change handler
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  //Event submit handler
  function handleSubmit(e) {
    e.preventDefault();
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    dispatch(addUser(input));
    console.log(addUser(input));
    
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false)
    }, 5000)

    setInput("");
  }

  return (
    <>
  <h3 className="text-center">Hello, welcome!, we know you want to travel in an {airSelected.name}, please fill out the following form:</h3>
  <br />
  {
      showAlert && 
      <Alert />
   }
    <div className="container" key={input.id}>
      <form className="container__form" onSubmit={(e) => handleSubmit(e)}>
        <div className="container__form-control">
          <div className="container__greeting">Register With Us</div>
          <label className="container__firstname">First Name</label>
          <input
            className="container__firstname-input"
            autoComplete="off"
            type="text"
            value={input.firstname}
            name="firstname"
            placeholder="Enter your first name"
            onChange={(e) => handleChange(e)}
          />
          {errors.firstname && <p className="errorname">{errors.firstname}</p>}
          <label className="container__firstname">Last Name</label>
          <input
            className="container__firstname"
            autoComplete="off"
            type="text"
            value={input.lastname}
            name="lastname"
            placeholder="Enter your last name"
            onChange={(e) => handleChange(e)}
          />
          {errors.lastname && <p className="errorname">{errors.lastname}</p>}
          <label className="container__firstname">Email</label>
          <input
            className="container__firstname"
            autoComplete="off"
            type="text"
            value={input.email}
            name="email"
            placeholder="Enter your email"
            onChange={(e) => handleChange(e)}
          />
          {errors.email && <p className="errorname">{errors.email}</p>}
          <label className="container__firstname">Telephone</label>
          <input
            className="container__firstname"
            autoComplete="off"
            type="text"
            value={input.telephone}
            name="telephone"
            placeholder="Enter your telephone number"
            onChange={(e) => handleChange(e)}
          />
          {errors.telephone && <p className="errorname">{errors.telephone}</p>}
          <label className="container__firstname">Age</label>
          <input
            className="container__firstname"
            autoComplete="off"
            type="number"
            min="18"
            max="100"
            value={input.ageRange}
            name="ageRange"
            placeholder="Enter your age"
            onChange={(e) => handleChange(e)}
          />
          {errors.email && <p className="errorname">{errors.email}</p>}

          <button
            className="container__btn active"
            type="submit"
            disabled={
              !input.firstname ||
              !input.lastname ||
              !input.email ||
              !input.telephone ||
              !input.ageRange
            }
          >
            Register
          </button>
        </div>
      </form>
      <Link to="/" className="btn-back">
        <BsFillArrowUpLeftCircleFill />
        Go back
      </Link>
    </div>
    </>
  );
}
