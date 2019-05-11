import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UsersActions } from '../../store/ducks/users';

import './styles.css';

const List = props => (
  <div className="container">
    <ul>
      {props.users.data.map(usr => (
        <li key={usr.id}>
          <div>
            <button
              onClick={() => {
                props.centralizeUser(usr);
              }}
            >
              <img src={usr.avatar} alt={usr.name} />
            </button>
            <div className="user-info">
              <p className="user">{usr.name}</p>
              <p className="login">{usr.login}</p>
            </div>
            <button
              type="button"
              onClick={() => {
                props.removeUser(usr);
              }}
            >
              <i className="fa fa-fw fa-times-circle remove" />
            </button>
            <button>
              <a href={`https://github.com/${usr.login}`} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-fw fa-angle-right go-to-page" />
              </a>
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
const mapStateToProps = state => ({
  users: state.users,
});
const mapDispatchToProps = dispatch => bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
