import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import CardView from 'react-native-cardview'

export default class StartScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    topupFunction = () => {
        this.props.navigation.navigate('TopupAccount')
    }

    render() {
        return (

            <View style={styles.MainContainer}>
                <Image source={require('../assets/coverImageOne.jpg')} style={styles.img} />

                <CardView
                    cardElevation={5}
                    cardMaxElevation={5}
                    cornerRadius={10}
                    style={{
                        backgroundColor: 'rgb(144, 238, 144)',
                        padding: 15,
                        width: "90%",
                        alignItems: 'center',
                        marginTop: 10
                    }}>

                    <Text style={{
                        fontSize: 20,
                        fontWeight: '600'
                    }}>
                        Account Balance
                    </Text>

                    <Text style={{
                        fontSize: 20,
                        fontWeight: '600'
                    }}>
                        4500
                    </Text>

                </CardView>

                <CardView
                    cardElevation={5}
                    cardMaxElevation={5}
                    cornerRadius={10}
                    style={{
                        backgroundColor: 'rgb(147, 112, 219)',
                        padding: 15,
                        width: "90%",
                        alignItems: 'center',
                        marginTop: 10
                    }}>

                    <Text style={{
                        fontSize: 20,
                        fontWeight: '600'
                    }}>
                        Day Pass Balance
                    </Text>

                    <Text style={{
                        fontSize: 20,
                        fontWeight: '600'
                    }}>
                        1200
                    </Text>

                </CardView>

                <CardView
                    cardElevation={5}
                    cardMaxElevation={5}
                    cornerRadius={10}
                    style={{
                        backgroundColor: 'rgb(250, 128, 114)',
                        padding: 15,
                        width: "90%",
                        alignItems: 'center',
                        marginTop: 10
                    }}>

                    <Text style={{
                        fontSize: 20,
                        fontWeight: '600',
                    }}>
                        But Day Pass
                    </Text>

                    <Text style={{
                        fontSize: 20,
                        fontWeight: '600'
                    }}>
                        500
                    </Text>

                </CardView>

                <TouchableOpacity style={styles.button} onPress={this.topupFunction}>
                    <Text style={styles.text}>Top Up Account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} >
                    <Text style={styles.text}>Get Quick Loan</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Travel History</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>But Day Pass </Text>
                </TouchableOpacity>

            </View>

        );
    }

}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
        // margin: 50
        marginTop: 20
    },

    TextInputStyleClass: {
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        width: '80%',
        borderWidth: 1,
        borderColor: '#0099ff',
        borderBottomEndRadius: 5
    },

    button: {
        width: '70%',
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: '#0099ff',
        borderRadius: 20,
        marginTop: 10,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        padding: 5
    },

    link: {
        fontWeight: 'bold',
        color: '#0099ff',
        alignSelf: 'flex-end'
    },

    row: {
        flexDirection: 'row',
        marginTop: 15,
    },

    img: {
        width: 350,
        height: 150,
        marginBottom: 5
    },

    forgotPassword: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 1,
    },
    forgot: {
        fontSize: 14,
        color: 'black',
    },

});