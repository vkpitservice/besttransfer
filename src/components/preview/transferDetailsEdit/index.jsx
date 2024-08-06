import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';

const TransferDetailsEdit = (props) => {
  const { send, recieve, theyRecieve, youSend, fee, totalPayment } = props;

  return (
    <View style={styles.root}>
      {/* Exchange & Rae */}
      <View style={styles.rowExchangeContainer}>
        {/* Save */}
        <Text style={styles.TextTitle}> {'Exchange rae'} </Text>
        <Text style={styles.TextAmount}>
          {send} = {recieve}
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
        <Text style={styles.TextTitle}> {'Total to pay'} </Text>
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
};

export default TransferDetailsEdit;
