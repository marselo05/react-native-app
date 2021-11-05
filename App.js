import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from './components/Modal';
import AddItem from './components/AddItem';
import ListItem from './components/Lista/ListaItem';

export default function App() {
    
    const [textValue, setTextValue]         = useState('');
    const [itemList, setItemList]           = useState([]);
    const [itemSelected, setItemSelected]   = useState({});
    const [modalVisible, setModalVisible]   = useState(false);

    // Setea el valor textValue 
    const habdleChangeText = (v) => setTextValue(v)

    // Evento que toma el valor del TextInput
    // y lo agregar al nuevo Item
    const handelAddItem = () => {
        // Obj 
        const item = {
            value: textValue,
            id: Math.random().toString(),
        }
        // Obj de itemList
        setItemList([
            ...itemList,
            item,
        ])
        // Vacio el campo TextInput
        setTextValue('')
    }
    
    // Confirma la eliminación del regitro 
    const onHandlerDelete = () => {
        
        const id = itemSelected.id
        setItemList( itemList => itemList.filter(item => item.id !== id))
        setModalVisible(false)
        setItemSelected({})
        
    }

    // Abre modal del registro seleccionado
    const onHandlerModal = id => {
        
        setItemSelected(itemList.find(item => item.id === id))
        setModalVisible(true)

    }


return (
    <View style={ styles.container }>

        <AddItem habdleChangeText={habdleChangeText} textValue={textValue} handelAddItem={handelAddItem} />

        <ListItem itemList={itemList} onHandlerModal={onHandlerModal} />
        
        <Modal modalVisible={modalVisible} onHandlerDelete={onHandlerDelete} itemSelected={itemSelected} />
        
    </View>
  );
}
// Estilos CSS
const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: '#F0F0F0',
        flex: 1,
    },
});
