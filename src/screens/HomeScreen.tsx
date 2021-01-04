import React, { FC } from 'react';
import { Button, Text, View } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { getUsers } from '../store/actions/users.actions';

const conector = connect(null, {
  getUsers: () => getUsers(),
});

type Props = ConnectedProps<typeof conector>;

const HomeScreen: FC<Props> = ({ getUsers }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HomeScreen</Text>
      <Button title="fetch Users" onPress={() => getUsers()}></Button>
    </View>
  );
};

export default conector(HomeScreen);
