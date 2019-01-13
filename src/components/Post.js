import React, {Component} from 'react';
import {
	Dimensions,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput,
  FlatList
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photo: this.props.photo,
      commentValue: ''
		}
	}

	like() {
		const { photo } = this.state;

		let newList = [];

		if (!photo.liked) {
			newList = [
				...photo.likers,
				{ login: 'myUser' }
			];
		} else {
			newList = photo.likers.filter(liker => {
				return liker.login !== 'myUser'
			})
		}

		const updatedPhoto = {
			...photo,
			liked: !photo.liked,
			likers: newList
		};

		this.setState({photo: updatedPhoto})
	}

	updateLikeIcone(liked) {
    return liked ? require('../../resources/img/s2-checked.png') : 
		require('../../resources/img/s2.png')
	}

	showLikes(likers) {
		if (likers.length <= 0)
			return null;


		return (
			<Text style={styles.likes}>
				{likers.length} {likers.length > 0 ? 'curtidas' : 'curtida'}
			</Text>
		);
	}

	showComment(photo) {
		if (!photo.comentario) {
			return null;
		}

		return (
			<View style={styles.comment}>
				<Text style={styles.commentUser}>{photo.loginUsuario}</Text>
				<Text>{photo.comentario}</Text>
			</View>
		);
	}

	addComment() {
	  if (!this.state.commentValue)
	    return;

	  const commentList = [...this.state.photo.comentarios, {
      id: this.state.commentValue,
      login: 'myUser',
      texto: this.state.commentValue
    }];

	  const newPhoto = {
	    ...this.state.photo,
      comentarios: commentList
    };

	  this.setState({photo: newPhoto, commentValue: ''});
	  this.inputComment.clear();
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

					{this.showLikes(photo.likers)}
					{this.showComment(photo)}

          <FlatList
            data={photo.comentarios}
            keyExtractor={item => item.id}
            renderItem={ ({item}) =>
              <View style={styles.comment}>
                <Text style={styles.commentUser}>{item.login}</Text>
                <Text>{item.texto}</Text>
              </View>
            }
          />

					<View style={styles.newComment}>
						<TextInput
              style={styles.input}
              placeholder='Add comment'
              ref={input => this.inputComment = input}
              onChangeText={text => this.setState({commentValue: text})}
            />

            <TouchableOpacity onPress={this.addComment.bind(this)}>
  						<Image style={styles.icon} source={require('../../resources/img/send.png')} />
            </TouchableOpacity>
					</View>
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
	likes: {
		fontWeight: 'bold'
	},
	comment: {
		flexDirection: 'row'
	},
	commentUser: {
		fontWeight: 'bold',
		marginRight: 5
	},
	input: {
		height: 40,
		flex: 1
	},
	icon: {
		height: 30,
		width: 30
	},
	newComment: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#ddd'
	}
});
