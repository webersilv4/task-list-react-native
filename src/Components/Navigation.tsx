import React from 'react';
import IconAnt from 'react-native-vector-icons/AntDesign';

import { TouchableHighlight, View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../@types';
import { styles } from '../styles/styles';


const Navigation = () => {

    const navigation = useNavigation<propsStack>();

    return (
        <View style={{ 
            backgroundColor: '#000',
            borderTopColor: '#000',
            paddingTop: 5,
            paddingBottom: 5,
            borderTopWidth: 1,
        }}>

            <View style={{ flexDirection: 'row', 
                justifyContent: 'space-between', 
                width: '90%', alignSelf: 'center' 
            }}>
            
                <TouchableHighlight 
                    style={{ alignItems: 'center' }}
                    onPress={() => navigation.navigate('Home')}>
                    <>
                        <IconAnt 
                            name='home' 
                            size={25} 
                            color={'#fff'} 
                        />
                        <Text style={styles.textDefault}>Inicio</Text>
                    </>
                </TouchableHighlight>

                <TouchableHighlight 
                    style={{ 
                        alignItems: 'center' 
                    }} 
                    onPress={()=> 
                        navigation.navigate('AddTasks')
                    }>
                    <>
                        <IconAnt 
                            name='pluscircleo' 
                            size={25} 
                            color={'#fff'}/>
                        <Text style={styles.textDefault}>Add Tarefa</Text>
                    </>
                </TouchableHighlight>

                <TouchableHighlight 
                    style={{ alignItems: 'center' }}
                    onPress={() => navigation.navigate('CompletedTasks')}
                >
                    <>
                        <IconAnt 
                            name='checkcircleo' 
                            size={25} 
                            color={'#fff'}
                        />
                        <Text style={styles.textDefault}>Concluidas</Text>
                    </>
                </TouchableHighlight>
            </View>

            

        </View>
    );
};

export default Navigation;