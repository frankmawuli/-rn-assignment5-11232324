import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import TransactionCard from '../cards/TransactionCard';
import { useTheme } from '../ThemeProvider';
const DATA = [
    { id: '1', job_title: 'Apple Store', prize: '- $5,99', companyName: 'Entertaiment', image: require('../../assets/icons/appleoption.png')},
    { id: '2', job_title: 'Spotify', prize: '- $12,99', companyName: 'Music',  image: require('../../assets/icons/spotify.png')},
    { id: '3', job_title: 'Money Transfer', prize: '$300', companyName: 'Transaction', image: require('../../assets/icons/moneyTransfer.png')},
    { id: '4', job_title: 'Grocery', prize: '- $88', companyName: 'Market',  image: require('../../assets/icons/grocery.png')},
    { id: '5', job_title: 'Microsoft', prize: '$75,00', companyName: 'Information Technology', image: require('../../assets/icons/microsoft.png')},
    { id: '6', job_title: 'Toyota', prize: '- $840', companyName: 'Vehicles', image: require('../../assets/icons/toyota.png')},
    { id: '7', job_title: 'Adidas', prize: '$98,00', companyName: 'Fashion', image: require('../../assets/icons/adidas.png')},
    { id: '8', job_title: 'Facebook', prize: '- $100', companyName: 'Social Media', image: require('../../assets/icons/Facebook.png')},
    
  ];

export default function Transaction() {
    const {isToggled} = useTheme();
    const [selectedTransaction, setselectedTransaction] = React.useState(null);
    
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={[styles.headerTitle, {color: isToggled ? 'white' : 'black'}]}>Transaction</Text>
            <TouchableOpacity>
                <Text style={styles.headerBtn}>Sell All</Text>
            </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
            {DATA.map((item) => (
                <TransactionCard
                key={item.id}
                item={item}
                selectedTransaction={selectedTransaction}
                isToggled = { isToggled }
                />
            ))}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 24,
        marginLeft: 10,
        marginRight: 15,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginLeft: -12,
    },
    headerTitle:{
        fontSize: 24,
        color: 'black'
    },
    headerBtn: {
        fontSize: 18,
        color: 'blue',
        paddingRight: 25,
    }
})