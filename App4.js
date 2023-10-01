import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';


export default function App4() {  
const navigation = useNavigation();
  return (
        <View style={styles.body}>
        <View style={styles.container1}>
            <Text style={styles.type1} >CODE </Text>
        </View>
        <View style={styles.container2}>
            <Text style={styles.type1}>VERIFICATION </Text>
            
        </View>
        <View style={styles.container3}>
            <Text style={styles.type2}>Enter ontime password sent on</Text>
            <Text style={styles.type2}>++849092605798</Text>
        </View>

        <View style={styles.container6}>
            <Text style={styles.type1}>[  ][  ][  ][  ][  ][  ] </Text>
        </View>

        <View style={styles.container4}>
            <Button title="VERIFI CODE" color="#E3C000"  onPress={() => navigation.navigate('App3')} />
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
    flex: 3,
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    
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
    flex: 2,  
    
    
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

  
});