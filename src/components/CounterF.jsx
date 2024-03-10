import { useState } from "react"


function CounterF () {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
      <div>
<button onClick={handleClick}>{count}</button>
      </div>
    );
}

/*class Counter extends Component {
    state = {
      count: 0
    };
    handleClick = () => {
      this.setState(({ count }) => ({
        count: count + 1
      }));
    };
    render() {
      return <button onClick={this.handleClick}>{this.state.count}</button>;
    }
  }
*/
  export default CounterF