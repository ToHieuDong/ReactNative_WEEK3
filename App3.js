import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { Button } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';


export default function App3() {
    const navigation = useNavigation();
return (
    <View style={styles.body}>
        <View style={styles.container1}>
        <Image source={require('./assets/Look.png')} style={styles.img}/>
        </View>
        <View style={styles.container2}>
        <Text style={styles.type1}>FORGET </Text>
        <Text style={styles.type1}>PASSWORD</Text>
        </View>
        <View style={styles.container3}>
        <Text style={styles.type2}>Provide your account’s email for which you want to reset your password </Text>
        </View>
        <View style={styles.container6}>
            <TextInput placeholder="Email" style={styles.emailInput} />
        </View>
        <View style={styles.container4}>
        <Button title="NEXT" color="#E3C000"  onPress={() => navigation.navigate('App2')} />
        
        </View>

        <View style={styles.container5}>
        
        </View>
        
    </View>

    );
}

const styles = StyleSheet.create({
    body: {
    flex: 6,
    backgroundColor: '#00CCF9',
    width: '360px',
    height: '640px'
    },
    container1: {
    flex: 4,
    
    },
    container2: {
    flex: 2,
    
    },
    container3: {
    flex: 1,
    
    },
    container4: {
    flex: 0.5,  
    flexDirection: 'row',
    justifyContent: 'space-around',
    
    }, 
    container5: {
    flex: 2,
    },
    container6: {
        flex: 1,

    },
    img: {
    width: '140px',
    height: '140px',
    top: '70px',
    alignSelf: 'center',
    },
    type1: {
    fontSize: '25px',
    fontWeight: '700',
    alignSelf: 'center',
    },
    type2: {
    fontSize: '15px',
    fontWeight: '700',
    // alignSelf: 'center',
    textAlign: 'center',
    },
    btn1: {
    width: '120px',
    height: '40px',
    backgroundColor: '#E3C000',
    borderRadius: '10px',
    alignSelf: 'center',
    textAlign: 'center',
    },
    btn2: {
    width: '120px',
    height: '40px',
    backgroundColor: '#E3C000',
    borderRadius: '10px',
    alignSelf: 'center',
    textAlign: 'center',
    },
    emailInput: {
        width: '305px',
        height: '45px',
        borderColor: '#E3C000',
        alignSelf: 'center',
    }

    
});