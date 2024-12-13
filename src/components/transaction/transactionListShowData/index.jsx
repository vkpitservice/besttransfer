import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';
import RequestSuccess from '@/assets/svg/transaction/RequestSuccessIcon.svg';
import RequestFail from '@/assets/svg/transaction/RequestFail.svg';
import { MaterialIcons } from '@expo/vector-icons';

const TransactionListShowData = (props) => {
  const { imageSource, name, date, amount,amount_base, type, onPress,account_number,ifsc } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      {/* 1st row */}
      <View style={styles.imageTextContainer}>
        <View style={{ flexDirection: 'row', borderBottomWidth: 1,padding:5 }}>
          <MaterialIcons name='assistant-navigation' size={30} />
          <Text style={{ marginLeft: 10, fontSize: 20 }}>{type}</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:5}}>
          <View style={styles.nameDateContainer}>
            <Text style={styles.nameTxt}> {name} </Text>
            <Text style={styles.nameTxt}> {account_number} </Text>
            <Text style={styles.dateTxt}>  {date} </Text>
          </View>
          <View style={styles.nameDateContainer}>
            <Text style={[styles.nameTxt, { fontSize: 15 }]}> GBP {amount_base} </Text>
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
};

export default TransactionListShowData;
