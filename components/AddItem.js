import React from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

const AddItem = ({ habdleChangeText, handelAddItem, textValue }) => 
{
    return(
        <View style={ styles.inputContainer }>
            <TextInput 
                placeholder="Item de lista" 
                style={ styles.input}
                onChangeText={habdleChangeText}
                value={textValue}
            />
            <Button 
                title="Add" 
                onPress={handelAddItem}
            />
        </View>    
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        borderBottomColor: 'black', 
        borderBottomWidth: 1,
        flex: 1,
        marginRight: 20,
        width: 200,
    },
})

export default AddItem