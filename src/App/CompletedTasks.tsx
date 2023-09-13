import React, { useEffect, useState } from 'react';
import IconAnt from 'react-native-vector-icons/AntDesign';
import Checkbox from 'expo-checkbox';

import { View, Text, ScrollView } from 'react-native';
import { Api } from '../resources/api/api';
import { propsDataApi } from '../../@types';
import { styles } from '../styles/styles';
import { TouchableHighlight } from 'react-native';


const CompletedTasks = () => {

    const [ tasks, setTasks ] = useState<propsDataApi>();

    const fetchDataApi = async () => {
        await Api.get('/list-all-tasks/64f7a2a3479edbc41760f582')
            .then(response=> {
                setTasks(response.data);
            })
            .catch(err=> console.log(err));
    };

    useEffect(()=> {
        fetchDataApi();
    }, []);

    return (
        <View style={{ 
            backgroundColor: '#000',
            flex: 1
        }}>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <Text style={styles.titleHead}>Atividades concluidas</Text>
                {tasks?.tasks.map((element, key)=>(
                    <View key={key} style={styles.card}>
                        {element.tasks.map((elementTask, key) => (
                            <View key={key}>
                                {
                                    elementTask.taskCompleted === true ? 
                                        <View>
                                            <Text style={styles.titleItemCard}>
                                                {element.dateFormated}
                                            </Text>
                                            <View style={styles.cardTask}>

                                                <Checkbox
                                                    style={styles.checkbox}
                                                    value={elementTask.taskCompleted}
                                                    // onValueChange={()=> console.log('ola')}
                                                    color={elementTask.description ? '#000' : undefined}
                                                />
                                                <View>
                                                    <Text style={styles.titleItemCard}>{elementTask.title.slice(0, 15) + '...'}</Text>
                                                    <Text style={styles.textLineThrough}>
                                                        {elementTask.description.slice(0, 20) + '...'}
                                                    </Text>
                                                </View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <Text style={[{ fontSize: 30 }, styles.textDefault]}>
                                                    10:00
                                                    </Text>

                                                    <TouchableHighlight>
                                                        <IconAnt name='delete' size={25} color='red'/>
                                                    </TouchableHighlight>
                                                </View>
                                            </View>
                                        </View>
                                        
                                        : 
                                        <Text>
                                            Você não tem nenhuma tarefa concluida.
                                        </Text>
                                }
                                
                            </View>
                        ))}
                    </View>
                ))}

                
            </ScrollView>

        </View>
    );
};



export default CompletedTasks;