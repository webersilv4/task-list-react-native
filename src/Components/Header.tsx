import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles/styles';



const Header = () => {
    return(
        <View style={{ 
            paddingTop: 10,
            paddingBottom: 10, 
            backgroundColor: '#000',
            borderBottomWidth: 1 
        }}>
            <View style={{ 
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'center',
                width: '90%',
            }}>
                <Image
                    style={{
                        width: 45, 
                        height: 45, 
                        borderRadius: 100, 
                        borderColor: '#9400D3', 
                        borderWidth: 3
                    }}
                    source={{
                        uri: 'https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_640.jpg',
                    }}
                />
                <Text style={styles.titleItemCard}>Weber costa</Text>
            </View>
        </View>
    );
};


export default Header;