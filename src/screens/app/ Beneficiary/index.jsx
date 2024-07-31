import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useMemo, useState } from 'react';
import { ColorSheet } from '@/utils/ColorSheet';
import { styles } from './styles';
import BackTitleAddComponent from '@/components/BackTitleAdd';
import { Constants } from './constants';
import Search from '@/components/input/Search';
import BeneficiarySearchListData from '@/components/transaction/beneficiarySearchListData';

const Beneficiary = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Map listData to beneficiaryList with appropriate structure
  const beneficiaryList = useMemo(
    () =>
      listData.map((item, index) => ({
        id: index, // Ensure 'id' is unique or use a unique identifier from data
        img: item.image,
        name: item.name,
        idNumber: item.idNumber,
        sBinNumber: item.sBinNumber,
      })),
    [],
  );

  // Filter beneficiary based on search query
  const filteredBeneficiaryList = useMemo(() => {
    if (searchQuery === '') {
      return beneficiaryList;
    }
    return beneficiaryList.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, beneficiaryList]);

  // Organize beneficiaries by the first letter of their last name
  const sections = useMemo(() => {
    const sectionsMap = filteredBeneficiaryList.reduce((acc, item) => {
      //   const [lastName] = item.name.split(' ').reverse();
      const firstLetter = item.name[0].toUpperCase();

      return {
        ...acc,
        [firstLetter]: [...(acc[firstLetter] || []), item],
      };
    }, {});

    return Object.entries(sectionsMap)
      .map(([letter, items]) => ({
        letter,
        items,
      }))
      .sort((a, b) => a.letter.localeCompare(b.letter));
  }, [filteredBeneficiaryList]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      {/* StatusBar */}
      <StatusBar
        barStyle='light-content'
        backgroundColor={ColorSheet.PrimaryButton}
        translucent={false}
      />

      <Image
        style={styles.imageBackground}
        source={require('@/assets/images/Transaction/BeneficiaryScreenImg.png')} // Replace with your image source
      />

      {/* BACK AND TITLE & ADD  BeneficiarySearchListData*/}
      <BackTitleAddComponent
        style={styles.headerStyle}
        title={Constants.HEADER_TITLE}
        onPressBack={() => {
          navigation.goBack();
        }}
        onPressAdd={() => {
          console.log('Add');
        }}
      />

      {/* Search */}
      <Search
        placeholder={Constants.SEARCH}
        value={searchQuery}
        onChangeText={setSearchQuery}
        onPressClose={() => {
          setSearchQuery('');
        }}
      />

      {/* Main View Container */}
      <View style={styles.mainContainer}>
        <FlatList
          contentContainerStyle={styles.scroll_container}
          showsVerticalScrollIndicator={false}
          data={sections}
          keyExtractor={(item) => item.letter}
          renderItem={({ item }) => (
            <>
              <Text style={styles.sectionHeader}> {item.letter} </Text>
              {item.items.map((beneficiary) => (
                <BeneficiarySearchListData
                  key={beneficiary.id}
                  imgSource={beneficiary.img}
                  name={beneficiary.name}
                  idNumber={beneficiary.idNumber}
                  sBinNumber={beneficiary.sBinNumber}
                />
              ))}
            </>
          )}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Beneficiary;

const listData = [
  {
    id: 1,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Amit Kumar',
    idNumber: '3025463201',
    sBinNumber: 'SBIN2001',
  },
  {
    id: 2,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Alexander',
    idNumber: '3025463201',
    sBinNumber: 'SBIN2001',
  },
  {
    id: 3,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Benjamin',
    idNumber: '3025463201',
    sBinNumber: 'SBIN2001',
  },
  {
    id: 4,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Balaji',
    idNumber: '3025463201',
    sBinNumber: 'SBIN2001',
  },
  {
    id: 5,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Chetan',
    idNumber: '3025463201',
    sBinNumber: 'SBIN2001',
  },
  {
    id: 6,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Dhetan',
    idNumber: '3025463201',
    sBinNumber: 'SBIN2001',
  },
  {
    id: 7,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Alex sk',
    idNumber: '3025463201',
    sBinNumber: 'SBIN2001',
  },
  {
    id: 8,
    image: require('@/assets/images/Transaction/TransactionProfile.png'),
    name: 'Sarujan Amal',
    idNumber: '3025463201',
    sBinNumber: 'SBIN2001',
  },
  {
    id: 9,
    image: '',
    name: 'Amal sk',
    idNumber: '3025463201',
    sBinNumber: 'SBIN2001',
  },
];
