import React from 'react'
import { StyleSheet } from 'react-native'
import { ListItem, Left, Thumbnail, Body, Text, Right } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from 'react-navigation-hooks'

export default MenuCard = ({ burger }) => {

    const description = burger.ingredients.map((ingredient, i) => {
        if (i + 1 == burger.ingredients.length)
            return ingredient.quantity + ' ' + ingredient.name

        else if (i + 2 == burger.ingredients.length)
            return ingredient.quantity + ' ' + ingredient.name + ' e '

        else
            return ingredient.quantity + ' ' + ingredient.name + ', '

    })

    const { navigate } = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigate('ViewBurger', { burger })}>
            <ListItem avatar key={burger._id}>
                <Left>
                    <Thumbnail source={{ uri: 'https://cdn.pixabay.com/photo/2015/05/20/13/40/hamburger-775439_960_720.png' }} />
                </Left>
                <Body>
                    <Text style={styles.cardTitle}>{burger.name}</Text>
                    <Text note style={styles.cardDescription}>{description}</Text>
                </Body>
                <Right style={{ justifyContent: 'center' }}>
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
        fontFamily: 'SourceSansPro-Light'
    }
})