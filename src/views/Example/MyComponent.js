import React from "react";

class MyComponent extends React.Component {
  // state là 1 object, có thể chứa nhiều thuộc tính
  // state là nơi lưu trữ dữ liệu của component, khi state thay đổi, component sẽ tự động re-render mà không cần load lại trang
  //key:value
  state = {
    name: "Vu",
    age: 18,
  };

  handleOnChangeName = (e) => {
    console.log(
      e.target.value,
      "event target: ",
      e.target,
      "event object: ",
      e
    ); // lấy giá trị của input
    this.setState({ name: e.target.value }); // cập nhật state với giá trị mới từ input
  };

  // arrow function () =>
  handleClickButton = () => {
    // this.setState({ name: "Vu" });
    // console.log(this.state.name);
    // console.log("Hello world");
    alert("Hello world");
  };

  render() {
    /*
    return 1 khối block này sẽ được gọi khi component được render
    và sẽ hiển thị nội dung của component.
    */

    // let name = "Vu";

    console.log(">>>call render: ", this.state);

    return (
      <>
        <div className="my-component">
          <input
            value={this.state.name}
            type="text"
            onChange={this.handleOnChangeName}
          />
          <p>My name is {this.state.name}.</p>
        </div>
        <div className="second">
          <button onClick={() => this.handleClickButton()}>Click me</button>
        </div>
      </>
    );
  }
  s;
}

export default MyComponent; //trả về mặc định 1 mycomponent nhưng nếu khai báo nhiều hàm trong mycomponent thì dùng {} thay vì default
