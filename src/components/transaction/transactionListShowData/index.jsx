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
        {type == 'success' ?
          <View style={{ flexDirection: 'row', borderBottomWidth: 1, padding: 5,backgroundColor:ColorSheet.TransactionSuccess }}>
            <MaterialIcons name='assistant-navigation' size={30} />
            <Text style={{ marginLeft: 10, fontSize: 20 }}>{type}</Text>
          </View>
          :
          type == "failed" ?
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, padding: 5,backgroundColor:ColorSheet.TransactionFailed }}>
              <MaterialCommunityIcons name='close-circle' size={30} />
              <Text style={{ marginLeft: 10, fontSize: 20 }}>{type}</Text>
            </View>
            :
            type == "review" ?
              <View style={{ flexDirection: 'row', borderBottomWidth: 1, padding: 5,backgroundColor:ColorSheet.TransactionReview }}>
                <MaterialIcons name='timer' size={30} />
                <Text style={{ marginLeft: 10, fontSize: 20 }}>{type}</Text>
              </View>
              :
              <View style={{ flexDirection: 'row', borderBottomWidth: 1, padding: 5,backgroundColor:ColorSheet.TransactionInprocess }}>
                <FontAwesome5 name='exclamation-circle' size={30} />
                <Text style={{ marginLeft: 10, fontSize: 20 }}>{type}</Text>
              </View>
        }
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
          <View style={styles.nameDateContainer}>
            <Text style={styles.nameTxt}> {name} </Text>
            <Text style={styles.dateTxt}> {account_number} </Text>
            <Text style={styles.dateTxt}> {date} </Text>
            <Text style={styles.dateTxt}> {transaction_type.toUpperCase()} </Text>
          </View>
          <View style={styles.nameDateContainer}>
            {/* <Text style={[styles.nameTxt, { fontSize: 15 }]}> GBP {amount_base} </Text> */}
            <Text style={[styles.nameTxt, { fontSize: 20 }]}> INR {amount} </Text>
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
