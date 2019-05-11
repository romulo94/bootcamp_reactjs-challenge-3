import React, { Component } from 'react';

import Modal from 'react-modal';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as UsersActions } from '../../store/ducks/users';

import './styles.css';

Modal.setAppElement(document.getElementById('root'));

class AddUser extends Component {
  state = {
    userInput: '',
  };

  handleHideModal = () => {
    const { hideModal } = this.props;
    hideModal();
    this.setState({ userInput: '' });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    // const { loading } = this.props;

    // if (loading) return;

    const { userInput } = this.state;

    if (!userInput) return;

    const {
      addUserRequest,
      modal: { cordinates },
    } = this.props;

    addUserRequest(userInput, cordinates);
    this.setState({ userInput: '' });
  };

  render() {
    const { modal, hideModal } = this.props;
    const { userInput } = this.state;
    return (
      <Modal
        isOpen={modal.open}
        onRequestClose={this.handleHideModal}
        contentLabel="Add User Modal"
        className="modal-container"
        overlayClassName="modal-overlay"
      >
        <h2>Adicionar novo usuário</h2>
        {modal.cordinates !== null ? (
          <>
            <p>{modal.cordinates.latitude}</p>
            <p>{modal.cordinates.longitude}</p>
          </>
        ) : null}
        <form action="" onSubmit={this.handleFormSubmit}>
          <input
            value={userInput}
            placeholder="Usuário no Github"
            type="text"
            onChange={e => this.setState({ userInput: e.target.value })}
          />
          <button type="submit">Salvar</button>
          <button onClick={this.handleHideModal} type="button">
            Cancelar
          </button>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...UsersActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddUser);
