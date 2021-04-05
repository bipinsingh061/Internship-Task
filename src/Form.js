import React from "react";
import CheckBox from "./Checkbox";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wOnly: false,
      numberOfGuests: 2,
      // added variales
      startDate: "",
      startTime: "",
      endTime: "",
      days: [
        { id: 1, value: "Sunday", isChecked: false },
        { id: 2, value: "Monday", isChecked: false },
        { id: 3, value: "Tuesday", isChecked: false },
        { id: 4, value: "Wednesday", isChecked: false },
        { id: 4, value: "Thursday", isChecked: false },
        { id: 4, value: "Friday", isChecked: false },
        { id: 4, value: "Saturday", isChecked: false },
      ],
      repeatType: "None",
      shift: "Morning Shift - 5am to 9am",
    };
  }

  handleAllChecked = (event) => {
    let days = this.state.days;
    days
      .filter(
        (fruite) => fruite.value !== "Sunday" && fruite.value !== "Saturday"
      )
      .forEach((fruite) => (fruite.isChecked = event.target.checked));
    this.setState({ days: days });
  };

  handleCheckChieldElement = (event) => {
    let days = this.state.days;
    days.forEach((fruite) => {
      if (fruite.value === event.target.value)
        fruite.isChecked = event.target.checked;
    });
    this.setState({ days: days });
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleChange = (event) => {
    console.log(event);
    this.setState({ repeatType: event.target.value });
  };

  handleChangeShift = (event) => {
    console.log(event);
    this.setState({ shift: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //  To be Created.......
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Starting Date
          <input
            style={{ marginLeft: "1.5em" }}
            name="startDate"
            type="date"
            value={this.state.startDate}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Start Time
          <input
            style={{ marginLeft: "3.1em" }}
            name="startTime"
            type="time"
            value={this.state.startTime}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          End Time
          <input
            style={{ marginLeft: "3.7em" }}
            name="endTime"
            type="time"
            value={this.state.endTime}
            onChange={this.handleInputChange}
          />
        </label>
        <h4>Please Select Day of the Week</h4>
        <input
          type="checkbox"
          onClick={this.handleAllChecked}
          value="checkedall"
        />{" "}
        Weekdays
        <ul style={{ listStyleType: "none" }}>
          {this.state.days.map((fruite) => {
            return (
              <CheckBox
                handleCheckChieldElement={this.handleCheckChieldElement}
                {...fruite}
              />
            );
          })}
        </ul>
        <label>
          Select Repeat Type :
          <select
            style={{ marginLeft: "1.5em" }}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="None">None</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Select Shift Type :
          <select
            style={{ marginLeft: "2.9em" }}
            value={this.state.value}
            onChange={this.handleChangeShift}
          >
            <option value="Morning Shift - 5am to 9am">
              Morning Shift - 5am to 9am
            </option>
          </select>
        </label>
        <br></br>
        <br />
        <button
          style={{
            backgroundColor: "white",
            color: "black",
            border: "2px solid red",
            borderRadius: "10px",
          }}
          type="submit"
          value="Add Shift Details"
        >
          Add Shift Details
        </button>
      </form>
    );
  }
}
