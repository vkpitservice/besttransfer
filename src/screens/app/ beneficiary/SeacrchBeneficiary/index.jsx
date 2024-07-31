import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useMemo, useState } from 'react';
import { ColorSheet } from '@/utils/ColorSheet';
import BackTitleAddComponent from '@/components/BackTitleAdd';
import Search from '@/components/input/Search';
import BeneficiarySearchListData from '@/components/transaction/beneficiarySearchListData';
import { styles } from './styles';
import { Constants } from './constants';

const Beneficiary = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Map listData to beneficiaryList with appropriate structure
  const beneficiaryList = useMemo(() => {
    const result = listData.flatMap((section) =>
      section.data.map((item) => ({
        id: item.id, // Use unique ID
        img: item.image,
        name: item.name,
        idNumber: item.idNumber,
        sBinNumber: item.sBinNumber,
      })),
    );
    // Log the entire beneficiaryList for debugging
    console.log('Beneficiary List:', result);
    return result;
  }, [listData]);

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
        <ScrollView
          contentContainerStyle={styles.scroll_container}
          showsVerticalScrollIndicator={false}
          // bounces={false}
        >
          <SectionList
            sections={sections}
            keyExtractor={(item) => item.id.toString()}
            renderSectionHeader={({ section: { letter } }) => (
              <Text style={styles.sectionHeader}> {letter} </Text>
            )}
            renderItem={({ item }) => {
              console.log('Beneficiary:', item.img);
              return (
                <BeneficiarySearchListData
                  key={item.id}
                  imgSource={item.img}
                  name={item.name}
                  idNumber={item.idNumber}
                  sBinNumber={item.sBinNumber}
                />
              );
            }}
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Beneficiary;

const listData = [
  {
    title: 'Amit Kumar',
    data: [
      {
        id: 1,
        image: require('@/assets/images/Transaction/TransactionProfile.png'),
        name: 'Amit Kumar',
        idNumber: '3025463201',
        sBinNumber: 'SBIN2001',
      },
    ],
  },
  {
    title: 'Alexander',
    data: [
      {
        id: 2,
        image: require('@/assets/images/Transaction/TransactionProfile.png'),
        name: 'Alexander',
        idNumber: '3025463201',
        sBinNumber: 'SBIN2001',
      },
    ],
  },
  {
    title: 'Benjamin',
    data: [
      {
        id: 3,
        image: require('@/assets/images/Transaction/TransactionProfile.png'),
        name: 'Benjamin',
        idNumber: '3025463201',
        sBinNumber: 'SBIN2001',
      },
    ],
  },
  {
    title: 'Balaji',
    data: [
      {
        id: 4,
        image: '',
        name: 'Balaji',
        idNumber: '3025463201',
        sBinNumber: 'SBIN2001',
      },
    ],
  },
  {
    title: 'Chetan',
    data: [
      {
        id: 5,
        image: require('@/assets/images/Transaction/TransactionProfile.png'),
        name: 'Chetan',
        idNumber: '3025463201',
        sBinNumber: 'SBIN2001',
      },
    ],
  },
  {
    title: 'Dhetan',
    data: [
      {
        id: 6,
        image: require('@/assets/images/Transaction/TransactionProfile.png'),
        name: 'Dhetan',
        idNumber: '3025463201',
        sBinNumber: 'SBIN2001',
      },
    ],
  },
  {
    title: 'sk',
    data: [
      {
        id: 7,
        image: require('@/assets/images/Transaction/TransactionProfile.png'),
        name: 'sk',
        idNumber: '3025463201',
        sBinNumber: 'SBIN2001',
      },
    ],
  },
  {
    title: 'Sarujan Amal',
    data: [
      {
        id: 8,
        image: require('@/assets/images/Transaction/TransactionProfile.png'),
        name: 'Sarujan Amal',
        idNumber: '3025463201',
        sBinNumber: 'SBIN2001',
      },
    ],
  },
  {
    title: 'Varu Amal',
    data: [
      {
        id: 9,
        image: '',
        name: 'Varu Amal',
        idNumber: '3025463201',
        sBinNumber: 'SBIN2001',
      },
    ],
  },
  {
    title: 'kamal Amal',
    data: [
      {
        id: 10,
        image: require('@/assets/images/Transaction/TransactionProfile.png'),
        name: 'kamal Amal',
        idNumber: '3025463201',
        sBinNumber: 'SBIN2001',
      },
    ],
  },
  {
    title: 'Murali Amal',
    data: [
      {
        id: 11,
        image: '',
        name: 'Murali Amal',
        idNumber: '3025463201',
        sBinNumber: 'SBIN2001',
      },
    ],
  },
  {
    title: 'Suresh Amal',
    data: [
      {
        id: 12,
        image: require('@/assets/images/Transaction/TransactionProfile.png'),
        name: 'Suresh Amal',
        idNumber: '3025463201',
        sBinNumber: 'SBIN2001',
      },
    ],
  },
];
