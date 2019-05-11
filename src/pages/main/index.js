import React, { Fragment } from 'react';

import List from '../../components/List';
import AddUser from '../../components/AddUser';
import Map from '../../components/Map';

const Main = () => (
  <Fragment>
    <Map />
    <List />
    <AddUser />
  </Fragment>
);
export default Main;
