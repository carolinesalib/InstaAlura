/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, FlatList} from 'react-native';

const width = Dimensions.get('screen').width;

type Props = {};
export default class App extends Component<Props> {
  render() {
    const photos = [
      {id: 1, userName: 'rafael'},
      {id: 2, userName: 'alberto'},
      {id: 3, userName: 'vitor'},
    ];

    return (
      <FlatList style={{marginTop: 20}}
        keyExtractor={item => String(item.id)}
        data={photos}
        renderItem={ ({item}) =>
          <View>
              <View style={{margin: 10, flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={require('./resources/img/send.png')}
                          style={styles.photoHeader} />
                  <Text>{item.userName}</Text>
              </View>
            <Image source={require('./resources/img/send.png')}
                style={styles.photo} />
          </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  photoHeader: {
      marginRight: 10,
      borderRadius: 20,
      width: 40,
      height: 40,
  },
  photo: {
      width: width,
      height: width,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
