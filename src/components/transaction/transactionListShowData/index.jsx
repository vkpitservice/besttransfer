import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';
import RequestSuccess from '@/assets/svg/transaction/RequestSuccessIcon.svg';
import RequestFail from '@/assets/svg/transaction/RequestFail.svg';
import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ColorSheet } from '@/utils/ColorSheet';

const TransactionListShowData = (props) => {
  const { imageSource, name, date, amount, amount_base, type, onPress, account_number, ifsc, transaction_type } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      {/* 1st row */}
      <View style={styles.imageTextContainer}>
        {type.toLowerCase() == 'success' ?
          <View style={{ flexDirection: 'row', borderBottomWidth: 1, padding: 5, backgroundColor: ColorSheet.TransactionSuccess, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
            <MaterialIcons name='assistant-navigation' size={28} style={{ color: ColorSheet.TransactionSuccessText }} />
            <Text style={{ marginLeft: 10, fontSize: 18, color: ColorSheet.TransactionSuccessText, }}>{type}</Text>
          </View>
          :
          type.toLowerCase() == "failed" ?
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, padding: 5, backgroundColor: ColorSheet.TransactionFailed, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
              <MaterialCommunityIcons name='close-circle' size={28} style={{ color: ColorSheet.TransactionFailedText }} />
              <Text style={{ marginLeft: 10, fontSize: 18, color: ColorSheet.TransactionFailedText, }}>{type}</Text>
            </View>
            :
            type.toLowerCase() == "review" ?
              <View style={{ flexDirection: 'row', borderBottomWidth: 1, padding: 5, backgroundColor: ColorSheet.TransactionReview, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <MaterialIcons name='timer' size={28} style={{ color: ColorSheet.TransactionReviewText }} />
                <Text style={{ marginLeft: 10, fontSize: 18, color: ColorSheet.TransactionReviewText, }}>{type}</Text>
              </View>
              :
              <View style={{ flexDirection: 'row', borderBottomWidth: 1, padding: 5, backgroundColor: ColorSheet.TransactionInprocess, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <FontAwesome5 name='exclamation-circle' size={28} />
                <Text style={{ marginLeft: 10, fontSize: 18, }}>{type}</Text>
              </View>
        }
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between', padding: 5, 
          borderBottomColor:ColorSheet.TransactionInprocess,borderBottomWidth:6,borderBottomLeftRadius:10,borderBottomRightRadius:10,borderLeftWidth:0.1,borderRightWidth:0.1
        }}>
          <View style={styles.nameDateContainer}>
            <Text style={styles.nameTxt}> {name} </Text>
            <Text style={styles.dateTxt}> {account_number} </Text>
            <Text style={styles.dateTxt}> {date} </Text>
            <Text style={styles.dateTxt}> {transaction_type.toUpperCase()} </Text>
          </View>
          <View style={styles.nameDateContainer}>
            {/* <Text style={[styles.nameTxt, { fontSize: 15 }]}> GBP {amount_base} </Text> */}
            <Text style={[styles.nameTxt, { fontSize: 20,textDecorationLine: 'underline',fontWeight:'bold' }]}> INR {amount} </Text>
          </View>
        </View>
      </View>

      {/* 2nd Row */}
      {type == 'success' && <Text style={styles.amountTxt}> +{amount} </Text>}

      {type == 'fail' && <Text style={styles.amountTxt}> -{amount} </Text>}
    </TouchableOpacity>
  );
};

TransactionListShowData.propTypes = {
  imageSource: PropTypes.object,
  name: PropTypes.string,
  date: PropTypes.string,
  amount: PropTypes.string,
  type: PropTypes.string,
  onPress: PropTypes.func,
  transaction_type: PropTypes.string
};

export default TransactionListShowData;
