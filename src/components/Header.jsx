import React from 'react';
import ModalForm from "./ModalForm";
import Login from './Login';

class Header extends React.Component {
  state = {
    show: false
  };

  showModalHandle = (e) => {
    e.preventDefault();
    this.setState({show: true});
    console.log(this.state.show);
  };
  handleSubmit = () => {
    console.log('Submit function!');
    this.setState({show: false});
  }

  handleCancel = () => {
    console.log('Cancel function!');
    this.setState({show: false});
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <a href="/" className="navbar-brand">Movies</a>
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0 mr-sm-2" type="submit">Search</button>
              <button
                variant="primary"
                onClick={this.showModalHandle}
                className="btn btn-outline-info my-2 my-sm-0"
                type="submit">Login</button>
              <ModalForm
                title="Login"
                show={this.state.show}
                onCancel={this.handleCancel}
                onSubmit={this.handleSubmit}>
                <Login />
              </ModalForm>
            </form>
          </div>
        </nav>
      </header>
    );
  }

}

export default Header;