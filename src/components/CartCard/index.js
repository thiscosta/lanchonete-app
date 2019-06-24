import React, { useState } from 'react'
import { StyleSheet, Alert } from 'react-native'
import { ListItem, Body, Text, Right, ActionSheet } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { parse, format } from 'date-fns'

var BUTTONS = ["Remover item do pedido", "Editar item", "Cancelar",];
var DESTRUCTIVE_INDEX = 0;
var CANCEL_INDEX = 2;

export default CartCard = ({ burger }) => {

    _handleClickedAction = (action) => {
        switch (action) {
            case 'Remover item do pedido':
                Alert.alert(
                    'Remover',
                    'Deseja realmente remover o item do pedido?',
                    [
                        {
                            text: 'Cancelar',
                            onPress: () => { },
                            style: 'cancel',
                        },
                        { text: 'Remover', onPress: () => { alert('removeu') } },
                    ],
                    { cancelable: false },
                );
                break
            case "Editar item":
                alert('Editar item do pedido')
                break
            default:
        }
    }

    return (
        <ListItem thumbnail key={burger._id}>

            <Body>
                <Text style={styles.cardTitle}>1x - {burger.name}</Text>
            </Body>
            <Right style={styles.cardPrice}>
                <Text style={styles.cardTitle} note>R${burger.price.toFixed(2)}</Text>
                <Icon style={styles.cardActions} name="ellipsis-v" color="#FE9000" size={15} onPress={() => {
                    ActionSheet.show(
                        {
                            options: BUTTONS,
                            cancelButtonIndex: CANCEL_INDEX,
                            destructiveButtonIndex: DESTRUCTIVE_INDEX,
                            title: `1x ${burger.name}`
                        },
                        buttonIndex => {
                            _handleClickedAction(BUTTONS[buttonIndex]);
                        }
                    )
                }} />

            </Right>
        </ListItem>
    )
}

const styles = StyleSheet.create({
    cardTitle: {
        fontFamily: 'SourceSansPro-Regular'
    },
    cardDescription: {
        marginTop: 5,
        fontFamily: 'SourceSansPro-Light'
    },
    cardPrice: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    cardActions: {
        marginLeft: 10,
        padding: 3
    }
})