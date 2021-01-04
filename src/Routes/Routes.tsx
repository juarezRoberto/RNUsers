import React, { FC } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import AlbumScreen from '../screens/AlbumScreen';
import HomeScreen from '../screens/HomeScreen';
import UsersScreen from '../screens/UsersScreen';

const Routes: FC<{}> = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="groupHome">
          <Scene key="home" component={HomeScreen} title="Home" />
        </Scene>
        <Scene key="groupUsers">
          <Scene key="users" component={UsersScreen} title="Users" />
        </Scene>
        <Scene key="groupAlbum">
          <Scene key="album" component={AlbumScreen} title="albums" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default Routes;
