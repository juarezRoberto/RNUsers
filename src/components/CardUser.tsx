import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { User } from '../types/user';

//definir interface de props
interface Props {
  user: User;
  name: string;
  username: string;
}

//agregar tipo para reconocer props Funtional Component
const CardUser: FC<Props> = ({ name, username, user }) => {
  const { phone, email, address } = user;

  return (
    <View style={styles.container}>
      <Text>Nombre: {name}</Text>
      <Text>Username: {username}</Text>
      <Text>Email: {email}</Text>
      <Text>Phone: {phone}</Text>
      <Text>address: {address.geo.lat}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
});

export default CardUser;
