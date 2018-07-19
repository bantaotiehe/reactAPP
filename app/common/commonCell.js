import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class commonCell extends Component {
    render() {
        return <TouchableOpacity style={styles.container}>
                    <View style={styles.cell_container}>
                        <Text style={styles.title}>{this.props.data.full_name}</Text>
                        <Text style={styles.description}>{this.props.data.description}</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text>Author:</Text>
                                <Image
                                    style = {{height:22,width:22}}
                                    source = {{uri : this.props.data.owner.avatar_url}}
                                />
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text>Stars:</Text>
                                <Text>{this.props.data.stargazers_count}</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Icon
                                    name={'ios-star-outline'}
                                    size = {22}
                                    style = {{color : '#2196f3'}}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    cell_container : {
        backgroundColor : 'white',
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 3,
        borderWidth: 0.5,
        borderColor : '#ddd',
        borderRadius: 2,
        shadowColor: 'gray',
        shadowOffset: {width:0.5,height:0.5},
        shadowOpacity: 0.4,
        shadowRadius: 1,
        elevation : 2
    },
    title : {
        fontSize : 16,
        marginBottom: 4,
        color : '#212121'
    },
    description : {
        fontSize : 14,
        marginBottom : 4,
        color : '#757575',
    }
})