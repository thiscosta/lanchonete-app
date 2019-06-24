import React from 'react'
import { StyleSheet } from 'react-native'
import { ListItem, Body, Text, Right } from 'native-base';

export default IngredientCard = ({ ingredient }) => {

    return (
        <ListItem thumbnail>

            <Body>
                <Text style={styles.cardTitle}>{ingredient.quantity}x - {ingredient.name}</Text>
            </Body>
            <Right style={styles.cardPrice}>
                <Text style={styles.cardTitle} note>R${(ingredient.price * ingredient.quantity).toFixed(2)}</Text>
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
})