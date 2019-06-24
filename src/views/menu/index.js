import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ScrollView, StyleSheet } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import MenuCard from '../../components/MenuCard/index'
import { Header, Body, Content } from 'native-base';
import { Title, Divider } from 'react-native-paper';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default Menu = () => {

    const burgers = useSelector(state => state.burgers.burgers)
    const dispatch = useDispatch()

    return (
        <ScrollView>
            <Header style={styles.header}>
                <Body style={styles.titleBody}>
                    <MaterialCommunityIcons name="hamburger" color="white" size={50} />
                    <Title style={styles.headerTitle}>Cardápio</Title>
                </Body>
            </Header>
            <Divider />
            <Content style={styles.contentStyle}>
                <Title style={styles.titleText}>Lanches</Title>

                {
                    burgers.map((burger, i) => (

                        <MenuCard burger={burger} key={i} />
                    ))
                }
            </Content>
        </ScrollView>
    )

}

Menu.navigationOptions = () => ({
    title: "Cardápio",

    tabBarIcon: ({ tintColor }) => (<MaterialIcons
        name="restaurant-menu"
        size={23}
        color={tintColor}
        onPress={() => { }}
    />)
});

const styles = StyleSheet.create({
    header: {
        height: 54 + getStatusBarHeight(),
        backgroundColor: '#FE9000'
    },
    headerTitle: {
        fontFamily: 'SourceSansPro-Regular',
        color: 'white',
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
        marginTop: 20
    }
})