import React from "react";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: this.props.user ? this.props.user.first_name : "",
      last_name: this.props.user ? this.props.user.last_name : "",
      email: this.props.user ? this.props.user.email : "",
      avatar: this.props.user ? this.props.user.avatar : "",
      isHappy: this.props.user ? this.props.user.isHappy : false
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      // Оновлюємо поля форми при зміні користувача
      this.setState({
        first_name: this.props.user ? this.props.user.first_name : "",
        last_name: this.props.user ? this.props.user.last_name : "",
        email: this.props.user ? this.props.user.email : "",
        avatar: this.props.user ? this.props.user.avatar : "",
        isHappy: this.props.user ? this.props.user.isHappy : false
      });
    }
  }

  handleAddUser = () => {
    if (
      this.state.first_name &&
      this.state.last_name &&
      this.state.email &&
      this.state.avatar
    ) {
      this.userAdd = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        avatar: this.state.avatar,
        isHappy: this.state.isHappy
      };
      if (this.props.user) this.userAdd.id = this.props.user.id;
      this.props.onAdd(this.userAdd);

      // Очищення полів форми
      this.setState({
        first_name: "",
        last_name: "",
        email: "",
        avatar: "",
        isHappy: false
      });
    } else {
      // Викинути помилку або відобразити повідомлення для користувача
      window.alert("Будь ласка, заповніть усі поля");
    }
  };

  render() {
    return (
      <form ref={(el) => (this.myForm = el)}>
        <input
          placeholder="First Name"
          value={this.state.first_name}
          onChange={(e) => this.setState({ first_name: e.target.value })}
        ></input>
        <input
          placeholder="Last Name"
          value={this.state.last_name}
          onChange={(e) => this.setState({ last_name: e.target.value })}
        ></input>
        <textarea
          placeholder="Email"
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
        ></textarea>
        <input
          placeholder="Avatar link"
          value={this.state.avatar}
          onChange={(e) => this.setState({ avatar: e.target.value })}
        ></input>
        <label htmlFor="isHappy">Good mood?</label>
        <input
          type="checkbox"
          id="isHappy"
          checked={this.state.isHappy}
          onChange={(e) => this.setState({ isHappy: e.target.checked })}
        ></input>

        <button type="button" onClick={this.handleAddUser}>
          {this.props.user ? "Change" : "Add record"}
        </button>
      </form>
    );
  }
}

export default AddUser;