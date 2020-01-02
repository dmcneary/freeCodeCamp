class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  
  // add handleChange() and submitMessage() methods here
  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  submitMessage(e) {
    e.preventDefault();
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
    })
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
        <input type="text" 
               value={ this.state.input }
               onChange={ this.handleChange } />
        <button type="submit"
               onClick={ this.submitMessage }>
          Submit
        </button>
        <ul>
          { this.state.messages.map((msg, i)=>{
            return <li key={i}>{msg}</li>
          })}
        </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};
