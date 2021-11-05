import React from 'react'
import {FlatList, StyleSheet, View, Text, Button} from 'react-native'

const ListItem = ({ itemList, onHandlerModal }) => 
{
    return (
        <View style={ styles.buttonContainer }>
            <FlatList 
                data={ itemList }
                renderItem={ data => (
                    <View key={data.item.id} style={[styles.item, styles.shadow]}>
                        <Text>{data.item.value}</Text>
                        <Button 
                            title="X"
                            onPress={ () => onHandlerModal(data.item.id) }    
                        />
                    </View>
                )}
                keyExtractor={ (item) => item.id}
            />
        </View>
    )
} 

const styles = StyleSheet.create({
    buttonContainer: {
        paddingTop: 5,
    },
    items: {
        marginTop: 20,
    },
    item: {
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
    }
})

export default ListItem