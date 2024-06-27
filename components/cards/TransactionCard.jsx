import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '../ThemeProvider';

export default function TransactionCard({item, selectedTransaction}) {
    const { isToggled } = useTheme()
    
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.infoContainer}>
            <View style={[styles.imageContainer, {backgroundColor: isToggled ? 'rgba(28, 28, 50, 10.0)' : 'lightgray'}]}>
        <Image style={[styles.image, { tintColor: (isToggled && ['1', '3', '4', '7'].includes(item.id)) ? 'white' : undefined }]} source={item.image} />
            </View>
        <View style={styles.descriptionsContainer}>
            <View style={styles.amount}>
                <Text style={[styles.jobName(selectedTransaction, item), {color: isToggled ? 'white' : 'black'}]} numberOfLines={1}>{item.job_title}</Text>
                <Text style={[styles.companyName, {color: isToggled ? 'gray' : 'black'}]} numberOfLines={1}>{item.companyName}</Text>
            </View>

            <View style={styles.details}>
            <Text style={styles.prize(item, isToggled)} numberOfLines={1}>{item.prize}</Text>
            </View>

        </View>
        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 30,
        borderRadius: 15,
        width: '95%',
        height: 74,
        alignItems: 'left',
        justifyContent: 'center',
    },
    amount: {
        width: '60%',
        flexDirection: 'column',
    },
    infoContainer: {
        flexDirection: 'row',
        columnGap: 12,
    },
    details: {
        width: 110,
        marginLeft: 40,
        marginTop: 0,
        flexDirection: 'column',
    },
    jobName: (selectedTransaction, item) => ({
        fontSize: 18,
        fontWeight: selectedTransaction === item.transaction ? 'bold' : 'normal',
        color: selectedTransaction === item.transaction ? 'black' : 'black'
    }),
    companyName: {
        fontSize: 13,
        color: 'black'
    },
    prize: (item, isToggled) => ({
        fontSize: 18,
        fontWeight: 'bold',
        color: parseFloat(item.prize.replace("$", "")) > 0 ? 'blue' : (isToggled ? 'white' : 'black')
    }),
    image:{
        height: 20,
        width: 20,
    },
    imageContainer: {
        height: 50,
        width: 50,
        borderRadius: 21,
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: ({ isToggled }) => isToggled ? 'white' : 'black',
    },
    descriptionsContainer: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});