import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';

const TransferDetailsEdit = (props) => {
  const { send, theyRecieve, youSend, fee, totalPayment,exchangeRate } = props;

  return (
    <View style={styles.root}>
      {/* Exchange & Rae */}
      <View style={styles.rowExchangeContainer}>
        {/* Save */}
        <Text style={styles.TextTitle}> {'Exchange rate'} </Text>
        <Text style={styles.TextAmount}>
          {send} = ₹{exchangeRate}
        </Text>
      </View>

      {/* They Recieve */}
      <View style={styles.rowExchangeContainer}>
        <Text style={styles.TextTitle}> {'They Recieve'} </Text>
        {/* Amount */}
        <Text style={styles.TextAmount}> ₹{theyRecieve} </Text>
      </View>

      {/* You send */}
      <View style={styles.rowExchangeContainer}>
        <Text style={styles.TextTitle}> {'You Send'} </Text>
        {/* Amount */}
        <Text style={styles.TextAmount}> £{youSend} </Text>
      </View>

      {/* You send */}
      <View style={styles.rowExchangeContainer}>
        <Text style={styles.TextTitle}> {'Fee'} </Text>
        {/* Amount */}
        <Text style={styles.TextAmount}> £{fee} </Text>
      </View>

      {/* Total to pay */}
      <View style={styles.rowExchangeContainer}>
        <Text style={styles.TextTitle}> {'Total Pay'} </Text>
        {/* Amount */}
        <Text style={styles.TextAmount}> £{totalPayment} </Text>
      </View>
    </View>
  );
};

TransferDetailsEdit.propTypes = {
  send: PropTypes.string,
  recieve: PropTypes.string,
  theyRecieve: PropTypes.string,
  youSend: PropTypes.string,
  fee: PropTypes.string,
  totalPayment: PropTypes.string,
  exchangeRate: PropTypes.any
};

export default TransferDetailsEdit;
