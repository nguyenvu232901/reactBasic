import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleSalaryChange = (e) => {
    this.setState({ salary: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn hành động mặc định của form
    if (!this.state.title || !this.state.salary) {
      alert("Please fill in all fields");
      return;
    }

    console.log("Check data:", this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1000), // Tạo ID ngẫu nhiên
      title: this.state.title,
      salary: this.state.salary,
    });

    this.setState({ title: "", salary: "" }); // Reset form sau khi submit
  };

  render() {
    return (
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="title">Title job: </label>
          <input
            type="text"
            value={this.state.title}
            onChange={(e) => this.handleTitleChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary: </label>
          <input
            type="salary"
            value={this.state.salary}
            onChange={(e) => this.handleSalaryChange(e)}
            required
          />
        </div>
        <button type="submit" onClick={(e) => this.handleSubmit(e)}>
          Submit
        </button>
      </form>
    );
  }
}

export default AddComponent; //trả về mặc định 1 mycomponent nhưng nếu khai báo nhiều hàm trong mycomponent thì dùng {} thay vì default
