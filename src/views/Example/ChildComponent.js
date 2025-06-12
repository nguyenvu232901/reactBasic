import React from "react";

class ChildComponent extends React.Component {
  state = {
    showjobs: false,
  };

  handleShowJobs = () => {
    this.setState({
      showjobs: !this.state.showjobs, // Đảo ngược giá trị của showjobs
    });
  };

  handleOnClickDelete = (job) => {
    console.log(">>>dlelete job: ", job);
    this.props.deleteJob(job); // Gọi hàm deleteJob từ props để xóa công việc
  };

  render() {
    /*
    return 1 khối block này sẽ được gọi khi component được render
    và sẽ hiển thị nội dung của component.
    */

    // let name = "Vu";

    //cach khai báo 1
    // let name = this.props.name; // Lấy giá trị name từ props
    // let age = this.props.age; // Lấy giá trị age từ props

    //cach khai báo 2
    let { arrjobs = [] } = this.props; // Destructuring với giá trị mặc định cho arrjobs
    let { showjobs } = this.state; // Lấy giá trị showjobs từ state
    let check = showjobs === true ? "showjobs = true" : "showjobs = false"; // Biến check để kiểm tra trạng thái showjobs
    console.log(">>>call render: ", this.props);

    console.log(">>>check: ", check);

    return (
      <>
        {showjobs === false ? (
          <div>
            <button onClick={() => this.handleShowJobs()}>Show</button>
          </div>
        ) : (
          <>
            <div className="child-component">
              {arrjobs.map((item, index) => {
                return (
                  <>
                    <div key={item.id} className="job-item">
                      <h2>
                        {item.title} - {item.salary} <></>
                        <span onClick={() => this.handleOnClickDelete(item)}>
                          x
                        </span>
                      </h2>
                    </div>
                  </>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowJobs()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

//cach 2: arrow function
// const ChildComponent = (props) => {
//   let { arrjobs = [] } = props; // Destructuring với giá trị mặc định cho arrjobs
//   return (
//     <>
//       <div className="child-component">
//         {arrjobs.map((item, index) => {
//           if (+item.salary > 900) {
//             return (
//               <div key={item.id} className="job-item">
//                 <h2>
//                   {item.title} - {item.salary}
//                 </h2>
//               </div>
//             );
//           }
//           return null; // Thêm dòng này để tránh lỗi khi điều kiện không đúng
//         })}
//       </div>
//     </>
//   );
// };

export default ChildComponent; //trả về mặc định 1 mycomponent nhưng nếu khai báo nhiều hàm trong mycomponent thì dùng {} thay vì default
