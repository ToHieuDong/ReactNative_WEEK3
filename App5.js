import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function App5() {  
const navigation = useNavigation();
return (
    <View style={styles.container} >
      <View style={{ flex: 1 }}></View>
      <Image style={{ height: 100, width: 100, alignSelf: 'center' }} source={{ uri: 'https://i.pinimg.com/564x/86/dc/fe/86dcfe97b6322ea1eade0db5160fc440.jpg' }}></Image>
      <View style={{ flex: 1 }}></View>

      <View style={{ flex: 1.5, flexDirection: 'row',borderBottomWidth: 2, borderColor: '#black' }}>
        <Image style={{ marginLeft: 10, height: 30, width: 30, alignSelf: 'center' }} source={{ uri: 'https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg' }}></Image>
        <TextInput
          style={{ flex: 1, padding: 9 }}
          placeholder='Please input user name'></TextInput>
      </View>  
      <View style={{ flex: 0.6 }}></View>
      <View style={{ flex: 1.5, flexDirection: 'row', borderBottomWidth: 2, borderColor: '#black' }}>
        <Image style={{ marginLeft: 10, height: 30, width: 30, alignSelf: 'center' }} source={{ uri: 'https://i.pinimg.com/564x/94/e0/e7/94e0e76b7e88d2002e813d819158994c.jpg' }}></Image>
        <TextInput
          style={{ flex: 1, padding: 9}}
          placeholder='Please input password'></TextInput>
      </View>       
      
      <View style={{ flex: 1 }}></View>
      <Button 
        style={{ flex: 1}}
        color='blue'
        title='LOGIN'
      >
      </Button>
      <View style={{ flex: 0.4 }}></View>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{fontWeight: 'bold', fontSize: 15 }}>Register</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Forgot Password</Text>
      </View>
      <View style={{ flex: 0.7 }}></View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
        <hr style={{flex:1, color:'black'}}></hr>
        <Text style={{ fontWeight: 'bold', fontSize: 15 }}> Orther Login Methods </Text>
        <hr style={{ flex: 1 }}></hr>
      </View>
      <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Image style={{ height: 80, width: 80, alignSelf: 'center' }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/OOjs_UI_icon_userAvatar-progressive.svg/1200px-OOjs_UI_icon_userAvatar-progressive.svg.png' }}></Image>
        <Image style={{ height: 80, width: 80, alignSelf: 'center' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/159/159599.png' }}></Image>
        <Image style={{ height: 80, width: 80, alignSelf: 'center' }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png' }}></Image>
      </View>
      <View style={{ flex: 1 }}></View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  

});