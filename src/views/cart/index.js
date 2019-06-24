import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ScrollView, StyleSheet, View, StatusBar } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import CartCard from '../../components/CartCard/index'
import { Header, Body, Content, Root } from 'native-base';
import { Title, Divider } from 'react-native-paper';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default Cart = () => {

    const burgers = useSelector(state => state.burgers.burgers)
    const dispatch = useDispatch()

    return (
        <Root>
            <ScrollView style={styles.root}>
                <Header style={styles.header}>
                    <Body style={styles.titleBody}>
                        <MaterialCommunityIcons name="cart-outline" color="#FE9000" size={50} />
                        <Title style={styles.headerTitle}>Carrinho</Title>
                    </Body>
                </Header>
                <Divider />
                <Content style={styles.contentStyle}>
                    <Title style={styles.titleText}>Itens no carrinho</Title>

                    {
                        burgers.map((burger, i) => (

                            <CartCard burger={burger} key={i} />
                        ))
                    }
                </Content>
            </ScrollView>
            <StatusBar backgroundColor="white" barStyle='dark-content'></StatusBar>
        </Root>
    )

}

Cart.navigationOptions = () => ({
    title: "Carrinho",
    tabBarIcon: ({ tintColor }) => (<MaterialCommunityIcons
        name="cart-outline"
        size={23}
        color={tintColor}
        onPress={() => { }}
    />)
});

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#F4F6F9'
    },
    header: {
        height: 54 + getStatusBarHeight(),
        marginBottom: 10,
        backgroundColor: 'white',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    headerTitle: {
        fontFamily: 'SourceSansPro-Regular',
        color: '#FE9000',
        marginLeft: 10
    },
    titleBody: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontFamily: 'SourceSansPro-Regular',
        color: '#FE9000',
        marginLeft: 10
    },
    contentStyle: {
        backgroundColor: 'white',
        paddingTop: 20
    }
})