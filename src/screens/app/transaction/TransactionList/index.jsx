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
import React, { useState } from 'react';
import { ColorSheet } from '@/utils/ColorSheet';
import { styles } from './styles';
import BackTitleAddComponent from '@/components/BackTitleAdd';
import { Constants } from './constants';
import TransactionListShowData from '@/components/transaction/transactionListShowData';

const TransactionList = ({ navigation }) => {
  const [data, setData] = useState(transactionData.slice(0, 6));
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // Check if there are more items to load

  const loadMoreData = () => {
    if (loading) return;

    setLoading(true);
    setTimeout(() => {
      const newPage = page + 1;
      const newData = transactionData.slice(0, newPage * 6);
      if (newData.length >= transactionData.length) {
        setHasMore(false); // No more data to load
      }
      setData(newData);
      setPage(newPage);
      setLoading(false);
    }, 1500); // Simulate network request
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      {/* Status Bar */}
      <StatusBar
        barStyle='light-content'
        backgroundColor = {'transparent'}
        translucent = {true}
      />

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
              imageSource={require('@/assets/images/Transaction/TransactionProfile.png')}
              name={item.name}
              date={item.date}
              amount={item.amount}
              type={item.type}
              onPress={() => navigation.navigate('TransferEnterAmountScreen')}
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
                <ActivityIndicator size='large' />
                <Text>Loading...</Text>
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
  },
  {
    id: 2,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Sara Ibrahim',
    date: 'Oct 12, 02:13 PM',
    amount: '£15.00',
    type: 'fail',
  },
  {
    id: 3,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Sara Ibrahim',
    date: 'Oct 11, 01:19 AM',
    amount: '£15.00',
    type: 'fail',
  },
  {
    id: 4,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Reem Khaled',
    date: 'Oct 11, 01:19 AM',
    amount: '£15.00',
    type: 'success',
  },
  {
    id: 5,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Hiba Saleh',
    date: 'Oct 04, 05:45 AM',
    amount: '£15.00',
    type: 'fail',
  },
  {
    id: 6,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Yara Khalil',
    date: 'Oct 14, 10:24 AM',
    amount: '£15.00',
    type: 'success',
  },
  {
    id: 7,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Reem Khaled',
    date: 'Oct 07, 09:10 PM',
    amount: '£15.00',
    type: 'success',
  },
  {
    id: 8,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Ali Mahmoud',
    date: 'Oct 15, 11:00 AM',
    amount: '£10.00',
    type: 'fail',
  },
  {
    id: 9,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Nadia Nasser',
    date: 'Oct 16, 01:45 PM',
    amount: '£20.00',
    type: 'success',
  },
  {
    id: 10,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Omar Ali',
    date: 'Oct 17, 02:10 PM',
    amount: '£8.00',
    type: 'fail',
  },
  {
    id: 11,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Layla Ahmed',
    date: 'Oct 18, 10:00 AM',
    amount: '£25.00',
    type: 'success',
  },
  {
    id: 12,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Zara Hassan',
    date: 'Oct 19, 09:00 AM',
    amount: '£12.00',
    type: 'fail',
  },
  {
    id: 13,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Mohammed Salah',
    date: 'Oct 20, 11:30 AM',
    amount: '£30.00',
    type: 'success',
  },
  {
    id: 14,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Aisha Ali',
    date: 'Oct 21, 08:45 AM',
    amount: '£5.00',
    type: 'fail',
  },
  {
    id: 15,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Fatima Yusuf',
    date: 'Oct 22, 12:00 PM',
    amount: '£18.00',
    type: 'success',
  },
];

const transactionData = listData.map((item, index) => ({
  id: index,
  img: item.image,
  name: item.name,
  date: item.date,
  amount: item.amount,
  type: item.type,
}));
