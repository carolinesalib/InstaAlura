import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import Post from './src/components/Post';

export default class App extends Component {
  render() {
    const photos = [
      {id: 1, userName: 'rafael'},
      {id: 2, userName: 'alberto'},
      {id: 3, userName: 'vitor'},
    ];

    return (
      <FlatList style={styles.container}
        keyExtractor={item => String(item.id)}
        data={photos}
        renderItem={ ({item}) =>
            <Post photo={item}/>
        }
    />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});
