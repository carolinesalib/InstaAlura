import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
				photo: this.props.photo
		}
	}

	like() {
    const updatedPhoto = {
        ...this.state.photo,
        liked: !this.state.photo.liked
    }
    this.setState({photo: updatedPhoto});
	}

	updateLikeIcone(liked) {
    return liked ? require('../../resources/img/s2-checked.png') : 
			require('../../resources/img/s2.png')
	}

	render() {
		const { photo } = this.state;

		return(
			<View>
				<View style={styles.header}>
					<Image source={{uri: photo.urlPerfil}} style={styles.postHeader} />
					<Text>{photo.userName}</Text>
				</View>
				<Image source={{uri: photo.urlFoto}} style={styles.postPhoto} />
				<View style={styles.footer}>
					<TouchableOpacity onPress={this.like.bind(this)}>
						<Image style={styles.likeButton}
								source={this.updateLikeIcone(photo.liked)}/>
					</TouchableOpacity>
				</View>
			</View>
			);
		}
  }

const styles = StyleSheet.create({
	header: {
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
	footer: {
			margin: 10,
	},
	likeButton: {
			height: 40,
			width: 40,
	},
});
