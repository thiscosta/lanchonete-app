import React from 'react'
import { ScrollView, StyleSheet, StatusBar } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import IngredientCard from '../../components/IngredientCard/index'
import { Header, Body, Content, Button, Text, Icon } from 'native-base';
import { Title, Divider } from 'react-native-paper';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useNavigationParam } from 'react-navigation-hooks';

export default ViewBurger = () => {

    const burger = useNavigationParam('burger')

    return (
        <ScrollView style={styles.root}>
            <Header style={styles.header}>
                <Body style={styles.titleBody}>
                    <MaterialCommunityIcons name="hamburger" color="white" size={50} />
                    <Title style={styles.headerTitle}>{burger.name}</Title>
                </Body>
            </Header>
            <Divider />
            <Content style={styles.contentStyle}>
                <Title style={styles.titleText}>Ingredientes</Title>
                {
                    burger.ingredients.map((ingredient, index) => (
                        <IngredientCard ingredient={ingredient} key={index} />
                    ))
                }
            </Content>
            <Button iconLeft style={styles.addButton}>
                <Icon name='add' />
                <Text>Adicionar ao carrinho</Text>
            </Button>
            <StatusBar backgroundColor="#FE9000" barStyle='light-content'></StatusBar>

        </ScrollView>
    )

}

ViewBurger.navigationOptions = () => ({
    title: "Cardápio",
});

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#F4F6F9'
    },
    header: {
        height: 84 + getStatusBarHeight(),
        marginBottom: 10,
        backgroundColor: '#FE9000',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    headerTitle: {
        fontFamily: 'SourceSansPro-Regular',
        color: 'white',
        marginLeft: 10
    },
    titleBody: {
        flexDirection: 'column',
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
    },
    addButton: {
        backgroundColor: '#FE9000'
    }
})