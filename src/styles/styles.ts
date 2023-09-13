import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    
    titleHead: {
        fontSize: 25,
        marginTop: 30,
        marginBottom: 50,
        fontFamily: 'WorkSans_VariableFont_Bold',
        color: 'white'
    },
    
    titleItemCard: { 
        fontSize: 18,
        fontFamily: 'WorkSans_VariableFont_wght',
        color: 'white'
    },

    textDefault: {
        fontFamily: 'WorkSans_VariableFont_wght',
        color: 'white'
    },

    textLineThrough: {
        fontFamily: 'WorkSans_VariableFont_wght',
        textDecorationLine: 'line-through',
        color: 'white'
    },

    card: {
        marginBottom: 50,
        fontFamily: 'WorkSans_VariableFont_wght',
    },

    cardTask: {
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4B088A',
        justifyContent: 'space-evenly',
        padding: 10,
        borderRadius: 20,
        marginTop: 15
    },

    checkbox: {
        marginRight: 15
    },

    container: {
        width: '90%',
        backgroundColor: 'transparent',
        alignSelf: 'center'
    },

    colMd8: {
        backgroundColor: '#fff',
        width: '80%',
        padding: 20
    },
    
    menu: {
        flexDirection: 'column',
        marginBottom: 50,
        paddingBottom: 10,
        justifyContent: 'center',
        fontFamily: 'WorkSans_VariableFont_wght',
    },

    menuItem: {
        // flex: 0.9
        marginTop: 10
    },

    buttonAddMenuItem: {
        alignSelf: 'center'
    },

    buttonDft: {
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#000',
        width: '100%',
        borderRadius: 8,
        padding: 20,
        marginTop: 30
    },

    buttonLogout: {
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 8,
        padding: 10,
    },

    formInput: {
        borderColor: '#000',
        borderRadius: 8,
        borderWidth: 1,
        paddingLeft: 20,
        height: 60,
        fontSize: 16
    }
});