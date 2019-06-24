import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ScrollView, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import HistoryCard from '../../components/HistoryCard/index'
import { Header, Body, Content } from 'native-base';
import { Title, Divider } from 'react-native-paper';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default History = () => {

    const burgers = useSelector(state => state.burgers.burgers)
    const dispatch = useDispatch()

    return (
        <ScrollView style={styles.root}>
            <Header style={styles.header}>
                <Body style={styles.titleBody}>
                    <Icon name="history" color="#FE9000" size={50} />
                    <Title style={styles.headerTitle}>Histórico de pedidos</Title>
                </Body>
            </Header>
            <Divider />
            <Content style={styles.contentStyle}>
                <Title style={styles.titleText}>Últimas compras</Title>

                {
                    burgers.map((burger, i) => (

                        <HistoryCard burger={burger} key={i} />
                    ))
                }
            </Content>
        </ScrollView>
    )

}

History.navigationOptions = () => ({
    title: "Histórico",
    tabBarIcon: ({ tintColor }) => (<Icon
        name="history"
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