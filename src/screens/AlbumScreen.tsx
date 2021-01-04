import React, { FC, useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { getAlbums } from '../store/actions/albums.actions';
import { RootState } from '../store/reducers';
import { selectAlbums } from '../store/selectors/albums.selectors';

const conector = connect(
  (state: RootState) => ({
    albums: selectAlbums(state),
  }),
  {
    getAlbums: (userId: number) => getAlbums({ userId }),
  },
);

type myProps = {
  userId: number;
};

type Props = ConnectedProps<typeof conector> & myProps;

const AlbumScreen: FC<Props> = ({ userId, getAlbums, albums }) => {
  useEffect(() => {
    getAlbums(userId);
  }, []);

  return (
    <>
      <Text>AlbumScreen</Text>
      <FlatList
        keyExtractor={(album) => album.id.toString()}
        data={albums}
        renderItem={({ item }) => (
          <Text>
            {item.id} {item.title}
          </Text>
        )}
      />
    </>
  );
};

export default conector(AlbumScreen);
