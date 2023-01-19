import { Component } from "react";
import axios from "axios";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    axios.get("https://reqres.in/api/users?page=2").then((response) => {
      this.setState({ data: response.data.data });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      console.log("Data has been updated");
    }
  }

  render() {
    return (
      <div>
        {this.state.data.map((item) => (
          <div key={item.id}>{item.first_name}</div>
        ))}
      </div>
    );
  }
}

export default ClassComponent;
