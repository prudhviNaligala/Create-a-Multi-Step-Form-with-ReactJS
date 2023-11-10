import React, { Component } from "react";

import PersonalInfo from "../PersonalInfo";
import AddOns from "../AddOns";
import Summary from "../Summary";
import SelectPlan from "../SelectPlan";
import Success from "../Success";

class Signup extends Component {
  state = {
    step: 1,
    email: "",
    name: "",
    phoneNumber: "",
    Active: true,
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  isActive = () => {
    this.setState({ Active: false });
  };

  render() {
    const { step } = this.state;
    const { email, name, phoneNumber } = this.state;
    const values = { email, name, phoneNumber };

    switch (step) {
      case 1:
        return (
          <PersonalInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
          />
        );
      case 2:
        return (
          <SelectPlan
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
          />
        );
      case 3:
        return (
          <div>
            <AddOns
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
            />
          </div>
        );

      case 4:
        return (
          <Summary
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
          />
        );
      case 5:
        return <Success />;
    }
  }
}

export default Signup;
