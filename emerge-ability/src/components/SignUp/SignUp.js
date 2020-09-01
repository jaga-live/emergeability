import React, { useState, useEffect } from "react";
import "./SignUp.css";
import { Input, Button } from "reactstrap";
import Select from "../UI/Select/Select";
import GreenLine from "../UI/GreenLine/GreenLine";

const SignUp = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interestedAs: "",
    location: "",
    whyChampion: "",
    whatChallenges: "",
    whichGoals: "",
    website: "",
  });
  const [locationOptions, setLocationOptions] = useState([]);

  useEffect(() => {
    const countryList = require("country-list");
    setLocationOptions([...countryList.getNames()]);
  }, []);

  const changeHandler = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const valid = () => {
    let requiredValues = [
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.interestedAs,
      formData.location,
    ];
    return requiredValues.every((el) => el.trim() !== "");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="give-top-space" id="signup">
      <div className="heading">
        <h3>Signup to become a Champion</h3>
        <GreenLine />
      </div>
      <div className="signup-container">
        <form className="signup" onSubmit={submitHandler}>
          <label>First Name</label>
          <Input
            spellCheck={false}
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(event) =>
              changeHandler(event.target.name, event.target.value)
            }
            required
          />
          <br />
          <label>Last Name</label>
          <Input
            spellCheck={false}
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(event) =>
              changeHandler(event.target.name, event.target.value)
            }
            required
          />
          <br />
          <label>Email</label>
          <Input
            spellCheck={false}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={(event) =>
              changeHandler(event.target.name, event.target.value)
            }
            required
          />
          <br />
          <label>Interested As</label>
          <Select
            value={formData.interestedAs}
            placeholder="I am interested as a... "
            options={[
              "Parent",
              "Guardian",
              "Educator",
              "Learner",
              "Advocate",
              "Other",
            ]}
            name="interestedAs"
            onChange={(value, name) => changeHandler(name, value)}
          />
          <br />
          <label>What's your location?</label>
          <Select
            value={formData.location}
            placeholder="What's your location?"
            options={[...locationOptions]}
            name="location"
            onChange={(value, name) => changeHandler(name, value)}
          />
          <br />
          <label>Why would you like to become an EmergeAbility Champion?</label>
          <br />
          <Input
            type="textarea"
            name="whyChampion"
            value={formData.whyChampion}
            onChange={(event) =>
              changeHandler(event.target.name, event.target.value)
            }
          ></Input>
          <br />
          <label>What challenges are you trying to address?</label>
          <br />
          <Input
            type="textarea"
            name="whatChallenges"
            value={formData.whatChallenges}
            onChange={(event) =>
              changeHandler(event.target.name, event.target.value)
            }
          ></Input>
          <br />
          <label>Which goals would you like to achieve?</label>
          <br />
          <Input
            type="textarea"
            name="whichGoals"
            value={formData.whichGoals}
            onChange={(event) =>
              changeHandler(event.target.name, event.target.value)
            }
          ></Input>
          <br />
          <label>Your Website</label>
          <Input
            spellCheck={false}
            type="text"
            name="website"
            placeholder="Your Website"
            value={formData.website}
            onChange={(event) =>
              changeHandler(event.target.name, event.target.value)
            }
          />
          <br />
          <div className="d-flex justify-content-center">
            <Button disabled={!valid()} type="submit" color="success">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
