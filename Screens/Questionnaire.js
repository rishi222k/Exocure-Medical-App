import { View, Text,Button,ScrollView,Image,StyleSheet,TouchableOpacity } from 'react-native'
import {AuthContext, AuthProvider} from '../Navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import data from '../QData'
import React,{useState, useContext} from 'react'
import { RadioButton} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Questionnaire = () => {

  const navigation = useNavigation();
  const {user,logout} = useContext(AuthContext);


  const [QRone, setQRone] = useState();
  const [QRtwo, setQRtwo] = useState();
  const [QRthree, setQRthree] = useState();
  const [QRfour, setQRfour] = useState();
  const [QRfive, setQRfive] = useState();
  const [QRsix, setQRsix] = useState();
  const [QRseven, setQRseven] = useState();
  const [QReight, setQReight] = useState();
  const [QRnine, setQRnine] = useState();
  const [QRten, setQRten] = useState();
  const [QReleven, setQReleven] = useState();
  const [QRtwelve, setQRtwelve] = useState();

  const onSubmit= async()=>{
    
    await firestore().collection('Users').doc(user.uid).update({
      questionnaire:true,
      question1: QRone,
    })
    .then(() => {
      console.log('Data updated on cloud firestore!');
    });
    
    navigation.navigate("TabNavigation");

  }

  return (
    <ScrollView style={{backgroundColor:"#fff",height:"100%"}}>
    <View style={{backgroundColor:"#fff",height:"100%",paddingHorizontal:"6%"}}>

    {/* Question 1 */}
    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[0].qid}</Text>
      <Text style={styles.question}>{data[0].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQRone(newValue)} value={QRone}>
      <View style={styles.radio}>
        <RadioButton value={data[0].opone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[0].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[0].optwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[0].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[0].opthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[0].opthree}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[0].opfour} color="#FFAA00"/>
        <Text style={styles.entry}>{data[0].opfour}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[0].opfive} color="#FFAA00"/>
        <Text style={styles.entry}>{data[0].opfive}</Text>
      </View>
    </RadioButton.Group>
    </View>

    {/* Question 2 */}
    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[1].qid}</Text>
      <Text style={styles.question}>{data[1].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQRtwo(newValue)} value={QRtwo}>
      <View style={styles.radio}>
        <RadioButton value={data[1].opone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[1].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[1].optwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[1].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[1].opthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[1].opthree}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[1].opfour} color="#FFAA00"/>
        <Text style={styles.entry}>{data[1].opfour}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[1].opfive} color="#FFAA00"/>
        <Text style={styles.entry}>{data[1].opfive}</Text>
      </View>
    </RadioButton.Group>
    </View>

    {/* Question 3 */}
    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[2].qid}</Text>
      <Text style={styles.question}>{data[2].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQRthree(newValue)} value={QRthree}>
      <View style={styles.radio}>
        <RadioButton value={data[2].opone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[2].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[2].optwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[2].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[2].opthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[2].opthree}</Text>
      </View>
    </RadioButton.Group>
    </View>

    {/* Question 4 */}
    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[3].qid}</Text>
      <Text style={styles.question}>{data[3].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQRfour(newValue)} value={QRfour}>
      <View style={styles.radio}>
        <RadioButton value={data[3].opone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[3].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[3].optwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[3].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[3].opthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[3].opthree}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[3].opfour} color="#FFAA00"/>
        <Text style={styles.entry}>{data[3].opfour}</Text>
      </View>
    </RadioButton.Group>
    </View>

    {/* Question 5 */}
    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[4].qid}</Text>
      <Text style={styles.question}>{data[4].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQRfive(newValue)} value={QRfive}>
      <View style={styles.radio}>
        <RadioButton value={data[4].opone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[4].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[4].optwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[4].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[4].opthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[4].opthree}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[4].opfour} color="#FFAA00"/>
        <Text style={styles.entry}>{data[4].opfour}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[4].opfive} color="#FFAA00"/>
        <Text style={styles.entry}>{data[4].opfive}</Text>
      </View>
    </RadioButton.Group>
    </View>

    {/* Question 6 */}
    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[5].qid}</Text>
      <Text style={styles.question}>{data[5].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQRsix(newValue)} value={QRsix}>
      <View style={styles.radio}>
        <RadioButton value={data[5].opone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[5].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[5].optwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[5].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[5].opthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[5].opthree}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[5].opfour} color="#FFAA00"/>
        <Text style={styles.entry}>{data[5].opfour}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[5].opfive} color="#FFAA00"/>
        <Text style={styles.entry}>{data[5].opfive}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[5].opsix} color="#FFAA00"/>
        <Text style={styles.entry}>{data[5].opsix}</Text>
      </View>
    </RadioButton.Group>
    </View>

    {/* Question 7 */}
    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[6].qid}</Text>
      <Text style={styles.question}>{data[6].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQRseven(newValue)} value={QRseven}>
      <View style={styles.radio}>
        <RadioButton value={data[6].opone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[6].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[6].optwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[6].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[6].opthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[6].opthree}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[6].opfour} color="#FFAA00"/>
        <Text style={styles.entry}>{data[6].opfour}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[6].opfive} color="#FFAA00"/>
        <Text style={styles.entry}>{data[6].opfive}</Text>
      </View>
    </RadioButton.Group>
    </View>

    {/* Question 8 */}
    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[7].qid}</Text>
      <Text style={styles.question}>{data[7].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQReight(newValue)} value={QReight}>
      <View style={styles.radio}>
        <RadioButton value={data[7].opone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[7].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[7].optwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[7].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[7].opthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[7].opthree}</Text>
      </View>
      
    </RadioButton.Group>
    </View>

    {/* Question 9 */}
    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[8].qid}</Text>
      <Text style={styles.question}>{data[8].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQRnine(newValue)} value={QRnine}>
      <View style={styles.radio}>
        <RadioButton value={data[8].opone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[8].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[8].optwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[8].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[8].opthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[8].opthree}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[8].opfour} color="#FFAA00"/>
        <Text style={styles.entry}>{data[8].opfour}</Text>
      </View>
    </RadioButton.Group>
    </View>

    {/* Question 10 */}
    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[9].qid}</Text>
      <Text style={styles.question}>{data[9].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQRten(newValue)} value={QRten}>
      <View style={styles.radio}>
        <RadioButton value={data[9].opone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[9].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[9].optwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[9].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[9].opthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[9].opthree}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[9].opfour} color="#FFAA00"/>
        <Text style={styles.entry}>{data[9].opfour}</Text>
      </View>
    </RadioButton.Group>
    </View>

    {/* Question 11 */}
    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[10].qid}</Text>
      <Text style={styles.question}>{data[10].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQReleven(newValue)} value={QReleven}>
      <View style={styles.radio}>
        <RadioButton value={data[10].opone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[10].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[10].optwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[10].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[10].opthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[10].opthree}</Text>
      </View>
    </RadioButton.Group>
    </View>

    {/* Question 12 */}
    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[11].qid}</Text>
      <Text style={styles.question}>{data[11].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQRtwelve(newValue)} value={QRtwelve}>
      <View style={styles.radio}>
        <RadioButton value={data[11].opone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[11].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[11].optwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[11].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton value={data[11].opthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[11].opthree}</Text>
      </View>
    </RadioButton.Group>
    </View>

    <TouchableOpacity
    onPress={onSubmit}>
        <View style={styles.but2}>
            <Text style={{fontFamily:"CircularXXTTBold",color:"white", fontSize:18,textAlign:'center'}}>
            Submit
            </Text>
          </View>
    </TouchableOpacity>

    </View>
    </ScrollView>
  )
}

export default Questionnaire

const styles = StyleSheet.create({
  questionhead:{
    fontFamily:"CircularXXTTBold",
    fontSize:16,
    color:'#FFAA00',
    marginBottom:5,
  },
  question:{
    fontFamily:"CircularXXTTBold",
    fontSize:18,
    color:'#3A3A3A',
    lineHeight:25,
    marginBottom:20
  },
  qbox:{
    marginTop:25,
    marginBottom:5,
  },
  entry:{
    fontFamily:"CircularXXTTMedium",
    fontSize:17,
    color:'#3A3A3A',
    lineHeight:25,
    marginLeft:5,
    marginBottom:4
  },
  radio:{
    flexDirection:"row",
    alignItems:"center"
  },
  but2:{
    width:"70%",
    backgroundColor:"#FFB31D",
    borderRadius:5,
    paddingVertical:12,
    alignSelf:'center',
    marginTop:50,
    marginBottom:40
  },
})