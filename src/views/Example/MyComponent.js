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
    this.setState({ name: e.target.value });
  };

  render() {
    /*
    return 1 khối block này sẽ được gọi khi component được render
    và sẽ hiển thị nội dung của component.
    */

    // let name = "Vu";

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
        <div></div>
      </>
    );
  }
  s;
}

export default MyComponent; //trả về mặc định 1 mycomponent nhưng nếu khai báo nhiều hàm trong mycomponent thì dùng {} thay vì default
