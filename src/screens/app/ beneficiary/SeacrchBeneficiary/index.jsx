import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SectionList,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import BackTitleAddComponent from '@/components/BackTitleAdd';
import Search from '@/components/input/Search';
import BeneficiarySearchListData from '@/components/transaction/beneficiarySearchListData';
import { styles } from './styles';
import { Constants } from './constants';
import getRequest from '@/components/NetworkRequest/getRequest';
import { DefaultConstants } from '@/utils/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
var bene = [];
const SearchBeneficiary = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [beneficiary, setbeneficiary] = useState([]);

  // Map listData to beneficiaryList with appropriate structure
  const beneficiaryList = useMemo(() => {
    if (beneficiary.length > 0) {
      console.log("responseeee" + JSON.stringify(beneficiary));

      const result = beneficiary.flatMap((section) =>
        section.data.map((item) => ({
          id: item.id, // Use unique ID
          img: item.image,
          name: item.name,
          idNumber: item.idNumber,
          sBinNumber: item.sBinNumber,
          benificiary_type: item.benificiary_type
        })),
      );
      // Log the entire beneficiaryList for debugging
      // console.log('Beneficiary List:', result);
      return result;
    }
    else {
      const result = [];
      return result;
    }
  }, [beneficiary]);

  // Filter beneficiary based on search query
  const filteredBeneficiaryList = useMemo(() => {
    if (searchQuery === '') {
      return beneficiaryList;
    }
    return beneficiaryList?.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, beneficiaryList]);

  // Organize beneficiaries by the first letter of their last name
  // Organize beneficiaries by the first letter of their name
  const sections = useMemo(() => {
    const sectionsMap = filteredBeneficiaryList.reduce((acc, item) => {
      const firstLetter = item.name[0].toUpperCase();
      return {
        ...acc,
        [firstLetter]: [...(acc[firstLetter] || []), item],
      };
    }, {});

    return Object.entries(sectionsMap)
      .map(([letter, items]) => ({
        letter,
        data: items,
      }))
      .sort((a, b) => a.letter.localeCompare(b.letter));
  }, [filteredBeneficiaryList]);

  const getBeneficiaries = async () => {
    bene = [];
    let token = await AsyncStorage.getItem('login_token');
    var beneresp = await getRequest(DefaultConstants.BASE_URL + 'benificiary/get/all', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
    console.log("hihihihihi");
    for (var i = 0; i < beneresp[1].data.length; i++) {
      bene.push({
        title: beneresp[1].data[i].account_name, data: [{
          id: beneresp[1].data[i].id,
          image: '@/assets/images/Transaction/TransactionProfile.png',
          name: beneresp[1].data[i].account_name != null ? beneresp[1].data[i].account_name : beneresp[1].data[i].first_name + " " + beneresp[1].data[i].nickname,
          idNumber: beneresp[1].data[i].account_number != null ? beneresp[1].data[i].account_number : beneresp[1].data[i].upi_id,
          sBinNumber: beneresp[1].data[i].ifsc,
          benificiary_type: beneresp[1].data[i].benificiary_type
        }]
      })
    }
    console.log(JSON.stringify(beneresp[1].data));
    setbeneficiary(bene)
  }
  useEffect(() => {
    getBeneficiaries()
  }, [])
  const navigateTo = async (beneId, name, accno, ifsc,benificiary_type) => {
    console.log(beneId);
    console.log(name);
    console.log(accno);
    console.log(ifsc);
    const totalAmount = await AsyncStorage.getItem('totalAmount');
    const enteredamount = await AsyncStorage.getItem('amount');
    const fromCurrency = await AsyncStorage.getItem('fromCurrency');
    const toCurrency = await AsyncStorage.getItem('toCurrency');
    const fees = await AsyncStorage.getItem('fees');
    const exchangeRate = await AsyncStorage.getItem('exchangeRate');
    if(totalAmount=='0.00' || enteredamount=='0.00' || fromCurrency==null || toCurrency==null)
    {
      navigation.navigate('PreviewScreen',{beneId:beneId,name:name,accno:accno,ifsc:ifsc,totalAmount:totalAmount,enteredamount:enteredamount,fromCurrency:fromCurrency,toCurrency:toCurrency,fees:fees,exchangeRate:exchangeRate,benificiary_type:benificiary_type});
    }
    else{
      navigation.navigate('PreviewScreen',{beneId:beneId,name:name,accno:accno,ifsc:ifsc,totalAmount:totalAmount,enteredamount:enteredamount,fromCurrency:fromCurrency,toCurrency:toCurrency,fees:fees,exchangeRate:exchangeRate,benificiary_type:benificiary_type});
    }
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      {/* StatusBar */}
      <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent={true} />
      <ScrollView
        contentContainerStyle={styles.scroll_container}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
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
            navigation.navigate('SelectBeneficiaryScreen');
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
          <SectionList
            scrollEnabled={false}
            sections={sections}
            keyExtractor={(item) => item.id.toString()}
            renderSectionHeader={({ section: { letter } }) => (
              <Text style={styles.sectionHeader}> {letter} </Text>
            )}
            renderItem={({ item }) => {
              // console.log('Beneficiary:', item.img);
              return (
                <BeneficiarySearchListData
                  key={item.id}
                  imgSource={item.img}
                  name={item.name}
                  idNumber={item.idNumber}
                  sBinNumber={item.sBinNumber}
                  beneId={item.id}
                  benificiary_type={item.benificiary_type}
                  onClick={navigateTo}
                />
              );
            }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SearchBeneficiary;