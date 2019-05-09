import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FavoriteActions } from '../../store/ducks/favorites';

class Main extends Component {
  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          description: PropTypes.string,
          url: PropTypes.string,
        }),
      ),
      error: PropTypes.oneOfType([null, PropTypes.string]),
    }).isRequired,
  };

  state = {
    repositoryInput: '',
  };

  handleAddRepository = (e) => {
    e.preventDefault();
    this.props.addFavoriteRequest(this.state.repositoryInput);
    this.setState({ repositoryInput: '' });
  };

  render() {
    return (
      <>
        <form action="" onSubmit={this.handleAddRepository}>
          <input
            onChange={e => this.setState({ repositoryInput: e.target.value })}
            value={this.state.repositoryInput}
            type="text"
            placeholder="usuario/repositorio"
          />
          <button type="submit">Adicionar</button>

          {this.props.favorites.loading && <span>Carregando</span>}

          {!!this.props.favorites.error && <span>{this.props.favorites.error}</span>}
        </form>

        <ul>
          {this.props.favorites.data.map(favorite => (
            <li key={favorite.id}>
              <p>
                <strong>{favorite.name}</strong> {favorite.description}
              </p>
              <a href={favorite.url}>Acessar</a>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
