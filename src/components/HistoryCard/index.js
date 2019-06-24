import React from 'react'
import { StyleSheet } from 'react-native'
import { ListItem, Body, Text, Right } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { parse, format } from 'date-fns'

export default HistoryCard = ({ burger }) => {

    return (
        <TouchableOpacity onPress={() => { }}>
            <ListItem thumbnail key={burger._id}>

                <Body>
                    <Text style={styles.cardTitle}>Pedido nº00001 - {format(parse(burger.createdAt), 'DD/MM/YYYY HH:mm')}</Text>
                    <Text note style={styles.cardDescription}>{burger.name}</Text>
                </Body>
                <Right style={styles.cardPrice}>
                    <Text style={styles.cardTitle} note>R${burger.price.toFixed(2)}</Text>
                </Right>
            </ListItem>
        </TouchableOpacity>
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
        justifyContent: 'center'
    }
})