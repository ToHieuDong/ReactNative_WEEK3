import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View ,Text, Pressable,TextInput,radioButton} from 'react-native';
import { Button } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';


export default function App6() {
    const navigation = useNavigation();
  return (
    <View style={styles.body}>
        <View style={styles.container1}>
            <Text style={styles.type1}>REGISTER</Text>
        </View>
        <View style={styles.container2}>
            <TextInput style={styles.inputForm} placeholder="Name"/>  
            <TextInput style={styles.inputForm} placeholder="Phone"/>  
            <TextInput style={styles.inputForm} placeholder="Email"/>  
            <TextInput style={styles.inputForm} placeholder="Password"/>
            <TextInput style={styles.inputForm} placeholder="Birthday"/> 
        </View>
        <View style={styles.container3}>
            <Text style={styles.type2}>We will help you to grow your business using online server </Text>
        </View>
        <View style={styles.container4}>
            <Button title="REGISTER" color="#E3C000"  onPress={() => navigation.navigate('App2')} />
        </View>

        <View style={styles.container5}>
            <Text style={styles.type2}>When you agree to terms and conditions </Text>
        </View>
      
    </View>

  );
}

const styles = StyleSheet.create({
  body: {
    flex: 6,
    backgroundColor: '#FFFFFF',
    width: '360px',
    height: '640px'
  },
  container1: {
    flex: 1,
    
  },
  container2: {
    flex: 3,
    
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
  inputForm: {
    fontWeight: "bold",
    paddingLeft: 20,
    width: "92%",
    height: 60,
    borderColor: "#000",
    backgroundColor: "#C4C4C4",
    marginTop: 15,
    padding: 0,
    marginLeft: 15,
    fontSize: 20,
  }

  
});