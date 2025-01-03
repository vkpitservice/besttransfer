import {
  ActivityIndicator,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import BackTitleAddComponent from '@/components/BackTitleAdd';
import { Constants } from './constants';
import TransactionListShowData from '@/components/transaction/transactionListShowData';
import getRequest from '@/components/NetworkRequest/getRequest';
import { DefaultConstants } from '@/utils/Constants';
import { ErrorFlash } from '@/utils/flashMessage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TransactionList = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // Check if there are more items to load

  const loadMoreData = () => {
    if (loading) return;

    setLoading(true);
    setTimeout(() => {
      if (data.length > 0) {
        const newPage = page + 1;
        const newData = data.slice(0, newPage * 6);
        if (newData.length >= data.length) {
          setHasMore(false); // No more data to load
        }
        setData(newData);
        setPage(newPage);
        setLoading(false);
      }
    }, 1500); // Simulate network request
  };
  useEffect(() => {
    getTransactions()
  }, [])

  const getTransactions = async () => {
    let token = await AsyncStorage.getItem('login_token');
    console.log(DefaultConstants.BASE_URL + 'transaction/all');
    console.log(token);

    const resp = await getRequest(DefaultConstants.BASE_URL + 'transaction/all', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
    console.log(resp[1].data);

    if (resp[0] != '400') {
      console.log(resp[1].data);

      const transactionData = (resp[1].data).map((item, index) => ({
        id: index,
        name: (item.benificiary.first_name + " " + item.benificiary.last_name).toUpperCase(),
        date: item.created,
        amount: (item.amount_base * item.current_rate),
        amount_base: item.amount,
        type: (item.status).toUpperCase(), 
        account_number: item.benificiary.benificiary_type=='upi' ? item.benificiary.upi_id : item.benificiary.account_number,
        ifsc: item.benificiary.ifsc,
        transaction_type:item.transaction_type,
        fees:item.fees,
        transaction_id: item.transaction_id
      }));
      setData(transactionData.slice(0, 6))
    }
    else {
      ErrorFlash(resp[1])
    }
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      {/* Status Bar */}
      <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent={true} />

      {/* Image */}
      <Image
        style={styles.backgroundImage}
        source={require('@/assets/images/Transaction/TransferDashboard.png')}
      />

      {/* Back Header Title Add */}
      <BackTitleAddComponent
        title={Constants.HEADER_TITLE}
        onPressBack={() => {
          navigation.goBack();
        }}
      />

      {/* List Of Data */}
      <View style={styles.mainContainer}>
        {/* FlatList */}
        <FlatList
          contentContainerStyle={styles.flatListContainer}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item, index }) => (
            <TransactionListShowData
              key={index}
              id={index}
              // imageSource={require('@/assets/images/Transaction/TransactionProfile.png')}
              name={item.name}
              date={item.date}
              amount={item.amount}
              amount_base={item.amount_base}
              type={item.type}
              onPress={() => navigation.navigate('TransactionDetailsScreen',{item:item})}
              account_number={item.account_number}
              ifsc={item.ifsc}
              transaction_type={item.transaction_type}
            />
          )}
          keyExtractor={(item) => item.id.toString()} // Use item.id for key
          onEndReached={loadMoreData}
          maxToRenderPerBatch={7}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() =>
            loading &&
            hasMore && (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 20,
                }}
              >
                {/* <ActivityIndicator size='large' />
                <Text>Loading...</Text> */}
              </View>
            )
          }
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default TransactionList;

const listData = [
  {
    id: 1,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Yara Khalil',
    date: 'Oct 14, 10:24 AM',
    amount: '£15.00',
    type: 'success',
  }
];
