import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Post extends Component {
	render() {
	  return(
			<View>
				<View style={styles.cabecalho}>
					<Image source={{uri: this.props.photo.urlPerfil}} style={styles.postHeader} />
					<Text>{this.props.photo.userName}</Text>
				</View>
				<Image source={{uri: this.props.photo.urlFoto}} style={styles.postPhoto} />
			</View>
			);
		}
  }

const styles = StyleSheet.create({
	cabecalho: {
		margin: 10,
		flexDirection: 'row',
		alignItems: 'center',
	},
	postHeader: {
		marginRight: 10,
		borderRadius: 20,
		width: 40,
		height: 40,
	},
	postPhoto: {
		width: width,
		height: width,
	},
});
