import React from "react";
import ChildComponent from "./ChildComponent"; // import component con
import AddComponent from "./AddComponent";
class Login extends React.Component {
  state = {
    arrjobs: [
      { id: 1, title: "Developer", salary: "1000" },
      { id: 2, title: "Designer", salary: "800" },
      { id: 3, title: "Manager", salary: "1200" },
    ],
  };

  addNewJob = (job) => {
    console.log(">>>check job: ", job);
    // let currentJobs = this.state.arrjobs; // Lấy mảng công việc hiện tại từ state
    // currentJobs.push(job); // Thêm công việc mới vào mảng hiện tại
    this.setState({
      arrjobs: [...this.state.arrjobs, job], // Thêm công việc mới vào mảng arrjobs
      // arrjobs: currentJobs, // Cập nhật state với mảng công việc mới
    });
  };

  deleteJob = (job) => {
    console.log(">>>delete job: ", job);
    // Lọc ra các công việc không phải là công việc cần xóa
    let currentJobs = this.state.arrjobs.filter((item) => item.id !== job.id);
    this.setState({
      arrjobs: currentJobs, // Cập nhật state với mảng công việc mới
    });
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
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          arrjobs={this.state.arrjobs}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}

export default Login; //trả về mặc định 1 mycomponent nhưng nếu khai báo nhiều hàm trong mycomponent thì dùng {} thay vì default
