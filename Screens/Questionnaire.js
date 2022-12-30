import { View, Text,Button,ScrollView,Image,StyleSheet,TouchableOpacity } from 'react-native'
import {AuthContext, AuthProvider} from '../Navigation/AuthProvider';
// import firestore from '@react-native-firebase/firestore';
import { doc, updateDoc} from "firebase/firestore";
import {db} from "../firebaseConfig"
import data from '../QData'
import React,{useState, useContext} from 'react'
import { RadioButton} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Questionnaire = () => {

  const navigation = useNavigation();
  const {user,logout} = useContext(AuthContext);


  const [QRone, setQRone] = useState(null);
  const [QRtwo, setQRtwo] = useState(null);
  const [QRthree, setQRthree] = useState(null);
  const [QRfour, setQRfour] = useState(null);
  const [QRfive, setQRfive] = useState(null);
  const [QRsix, setQRsix] = useState(null);
  const [QRseven, setQRseven] = useState(null);
  const [QReight, setQReight] = useState(null);
  const [QRnine, setQRnine] = useState(null);
  const [QRten, setQRten] = useState(null);
  const [QReleven, setQReleven] = useState(null);
  const [QRtwelve, setQRtwelve] = useState(null);
  const [QRthirteen, setQRthirteen] = useState(null);

  const onSubmit= async()=>{
    
      const QRef = doc(db, "Users", user.uid);

      await updateDoc(QRef,{
      questionnaire:true,
      question1: QRone,
      question2: QRtwo,
      question3: QRthree,
      question4: QRfour,
      question5: QRfive,
      question6: QRsix,
      question7: QRseven,
      question8: QReight,
      question9: QRnine,
      question10: QRten,
      question11: QReleven,
      question12: QRtwelve,
      question13: QRthirteen,
    })
    .then(() => {
      console.log('Data updated on cloud firestore!');
    }).catch((err)=>{
      console.log('Firebase Error',err);
    });
    
    navigation.navigate("TabNavigation");

  }

  return (
    <ScrollView style={{backgroundColor:"#fff",height:"100%"}}>
    <View style={{backgroundColor:"#fff",height:"100%",paddingHorizontal:"6%"}}>
    
    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[12].qid}</Text>
      <Text style={styles.question}>{data[12].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQRthirteen(newValue)} value={QRthirteen}>
      <View style={styles.radio}>
        <RadioButton.Android value={data[12].valone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[12].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[12].valtwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[12].optwo}</Text>
      </View>
    </RadioButton.Group>
    </View>

    
    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[0].qid}</Text>
      <Text style={styles.question}>{data[0].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQRone(newValue)} value={QRone}>
      <View style={styles.radio}>
        <RadioButton.Android value={data[0].valone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[0].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[0].valtwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[0].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[0].valthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[0].opthree}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[0].valfour} color="#FFAA00"/>
        <Text style={styles.entry}>{data[0].opfour}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[0].valfive} color="#FFAA00"/>
        <Text style={styles.entry}>{data[0].opfive}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[0].valsix} color="#FFAA00"/>
        <Text style={styles.entry}>{data[0].opsix}</Text>
      </View>
    </RadioButton.Group>
    </View>

    
    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[1].qid}</Text>
      <Text style={styles.question}>{data[1].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQRtwo(newValue)} value={QRtwo}>
      <View style={styles.radio}>
        <RadioButton.Android value={data[1].valone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[1].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[1].valtwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[1].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[1].valthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[1].opthree}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[1].valfour} color="#FFAA00"/>
        <Text style={styles.entry}>{data[1].opfour}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[1].valfive} color="#FFAA00"/>
        <Text style={styles.entry}>{data[1].opfive}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[1].valsix} color="#FFAA00"/>
        <Text style={styles.entry}>{data[1].opsix}</Text>
      </View>
    </RadioButton.Group>
    </View>

    
    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[2].qid}</Text>
      <Text style={styles.question}>{data[2].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQRthree(newValue)} value={QRthree}>
      <View style={styles.radio}>
        <RadioButton.Android value={data[2].valone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[2].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[2].valtwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[2].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[2].valthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[2].opthree}</Text>
      </View>
    </RadioButton.Group>
    </View>


    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[3].qid}</Text>
      <Text style={styles.question}>{data[3].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQRfour(newValue)} value={QRfour}>
      <View style={styles.radio}>
        <RadioButton.Android value={data[3].valone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[3].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[3].valtwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[3].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[3].valthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[3].opthree}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[3].valfour} color="#FFAA00"/>
        <Text style={styles.entry}>{data[3].opfour}</Text>
      </View>
    </RadioButton.Group>
    </View>


    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[4].qid}</Text>
      <Text style={styles.question}>{data[4].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQRfive(newValue)} value={QRfive}>
      <View style={styles.radio}>
        <RadioButton.Android value={data[4].valone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[4].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[4].valtwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[4].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[4].valthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[4].opthree}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[4].valfour} color="#FFAA00"/>
        <Text style={styles.entry}>{data[4].opfour}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[4].valfive} color="#FFAA00"/>
        <Text style={styles.entry}>{data[4].opfive}</Text>
      </View>
    </RadioButton.Group>
    </View>


    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[5].qid}</Text>
      <Text style={styles.question}>{data[5].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQRsix(newValue)} value={QRsix}>
      <View style={styles.radio}>
        <RadioButton.Android value={data[5].valone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[5].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[5].valtwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[5].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[5].valthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[5].opthree}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[5].valfour} color="#FFAA00"/>
        <Text style={styles.entry}>{data[5].opfour}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[5].valfive} color="#FFAA00"/>
        <Text style={styles.entry}>{data[5].opfive}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[5].valsix} color="#FFAA00"/>
        <Text style={styles.entry}>{data[5].opsix}</Text>
      </View>
    </RadioButton.Group>
    </View>


    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[6].qid}</Text>
      <Text style={styles.question}>{data[6].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQRseven(newValue)} value={QRseven}>
      <View style={styles.radio}>
        <RadioButton.Android value={data[6].valone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[6].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[6].valtwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[6].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[6].valthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[6].opthree}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[6].valfour} color="#FFAA00"/>
        <Text style={styles.entry}>{data[6].opfour}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[6].valfive} color="#FFAA00"/>
        <Text style={styles.entry}>{data[6].opfive}</Text>
      </View>
    </RadioButton.Group>
    </View>

    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[7].qid}</Text>
      <Text style={styles.question}>{data[7].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQReight(newValue)} value={QReight}>
      <View style={styles.radio}>
        <RadioButton.Android value={data[7].valone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[7].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[7].valtwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[7].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[7].valthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[7].opthree}</Text>
      </View>
      
    </RadioButton.Group>
    </View>


    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[8].qid}</Text>
      <Text style={styles.question}>{data[8].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQRnine(newValue)} value={QRnine}>
      <View style={styles.radio}>
        <RadioButton.Android value={data[8].valone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[8].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[8].valtwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[8].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[8].valthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[8].opthree}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[8].valfour} color="#FFAA00"/>
        <Text style={styles.entry}>{data[8].opfour}</Text>
      </View>
    </RadioButton.Group>
    </View>


    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[9].qid}</Text>
      <Text style={styles.question}>{data[9].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQRten(newValue)} value={QRten}>
      <View style={styles.radio}>
        <RadioButton.Android value={data[9].valone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[9].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[9].valtwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[9].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[9].valthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[9].opthree}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[9].valfour} color="#FFAA00"/>
        <Text style={styles.entry}>{data[9].opfour}</Text>
      </View>
    </RadioButton.Group>
    </View>


    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[10].qid}</Text>
      <Text style={styles.question}>{data[10].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQReleven(newValue)} value={QReleven}>
      <View style={styles.radio}>
        <RadioButton.Android value={data[10].valone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[10].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[10].valtwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[10].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[10].valthree} color="#FFAA00"/>
        <Text style={styles.entry}>{data[10].opthree}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[10].valfour} color="#FFAA00"/>
        <Text style={styles.entry}>{data[10].opfour}</Text>
      </View>
    </RadioButton.Group>
    </View>


    <View style={styles.qbox}>
      <Text style={styles.questionhead}>Question {data[11].qid}</Text>
      <Text style={styles.question}>{data[11].question}</Text>
      <RadioButton.Group onValueChange={newValue => setQRtwelve(newValue)} value={QRtwelve}>
      <View style={styles.radio}>
        <RadioButton.Android value={data[11].valone} color="#FFAA00"/>
        <Text style={styles.entry}>{data[11].opone}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[11].valtwo} color="#FFAA00"/>
        <Text style={styles.entry}>{data[11].optwo}</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android value={data[11].valthree} color="#FFAA00"/>
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