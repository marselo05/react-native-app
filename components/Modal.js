import React from 'react';
import { Button, Text, Modal, View, StyleSheet, StatusBar } from 'react-native';

const ModalComponent = ( {modalVisible, onHandlerDelete, itemSelected} ) => 
{
    return (
        <Modal 
            visible={modalVisible} animationType="slide" transparent
        >
            <View style={styles.modalContainer}>
                <View style={styles.modal}>
                    <View >
                        <Text style={styles.modalMessage}>
                            Estas seguros que quiere eliminar
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.modalTitle}>
                            {itemSelected.value}
                        </Text>
                    </View>
                    <View>
                        <Button
                            title="CONFIRMAR"
                            onPress={onHandlerDelete}
                        />
                    </View>
                </View>
                <StatusBar style="auto" />
            </View>
        </Modal>

    );

};


// Estilos CSS
const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    modal: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 200,
        backgroundColor: '#f5deb3',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        padding: 10

      },
      modalMessage: {
        fontSize: 18,
      },
      modalTitle: {
        fontSize: 30,
        marginTop: 10,
        marginBottom: 20,
      },
});

export default ModalComponent;