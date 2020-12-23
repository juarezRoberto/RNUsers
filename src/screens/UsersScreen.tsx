import React, { FC, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { RootState } from '../store/reducers';
import { connect, ConnectedProps } from 'react-redux';
import { getUsers } from '../store/actions/users.actions';
import {
  selectUsers,
  selectUsersError,
  selectUsersLoading,
} from '../store/selectors/users.selectors';
import CardUser from '../components/CardUser';

// connect permite conectar un componente con el store recibe 2 param
// mapStatetoProps obtiene un estado del store
// mapDispatchToProps para enviar actions al store
const conector = connect(
  (state: RootState) => ({
    users: selectUsers(state),
    loadingUsers: selectUsersLoading(state),
    errorUsers: selectUsersError(state),
  }),
  {
    getUsers: () => getUsers(),
  },
);

//definir constante conector como tipo para que reconozca sus propiedades
type Props = ConnectedProps<typeof conector>;

const UsersScreen: FC<Props> = ({
  getUsers,
  users,
  loadingUsers,
  errorUsers,
}) => {
  useEffect(() => {
    getUsers();
  }, []);

  console.log('mi error', errorUsers);

  if (errorUsers !== null)
    return <Text>Error al obtener usuarios intentalo mas tarde</Text>;

  if (users?.length === 0) return <Text>No existen usuarios</Text>;

  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Lista de Usuarios</Text>
      </View>
      {!loadingUsers ? null : <ActivityIndicator size="large" color="gold" />}
      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item }) => {
          return (
            <CardUser user={item} name={item.name} username={item.username} />
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});

// envolver al componente dentro de la constante conector
export default conector(UsersScreen);
