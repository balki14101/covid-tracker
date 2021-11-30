import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
//colors
import colors from '../constants/colors';

import {DataTable} from 'react-native-paper';

import {useSelector, useDispatch} from 'react-redux';
import {fetchCountrystats} from '../reducer/covidtracker';
import {useNavigation} from '@react-navigation/native';

import moment from 'moment';

import StatsComponent from './homecomponent/globalcomponent';
//fontSize
import {
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_NORMAL,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_SMALL,
  FONT_SIZE_EXTRA_SMALL,
} from '../constants/fontsize';

//icons
import Icon from 'react-native-vector-icons/FontAwesome';

import totalcases from '../assets/covid-white-1.png';
import recovery from '../assets/vaccine-white.png';
import newcases from '../assets/Vector-1.png';
import death from '../assets/coffin-gradient.png';
//Dimensions
import {Height, Width} from '../constants/dimension';

const countrystats = props => {
  // console.log('country stats props', props);

  const slug = props.route.params.Slug;
  const CountryCode = props.route.params.ISO2.toLowerCase();

  const navigation = useNavigation();

  const {global, countries, countryStats} = useSelector(state => {
    return {
      countryStats: state.covidtracker.countryStats,
    };
  });

  console.log('countryStats', countryStats);
  var latestCount = [];

  if (countryStats && countryStats.length > 0) {
    latestCount = countryStats[countryStats.length - 1];
  }
  console.log('latest count', latestCount);

  // useEffect(() => {
  //   dispatch(fetchCountrystats(slug));
  // }, []);

  const date = moment(latestCount.Date).format('MMM Do YY');

  const countryData = [
    {
      title: 'Total Cases',
      icon: totalcases,
      bgColor: '#109FEF',
      textColor: colors.WHITE,
      content: latestCount.Confirmed,
      date: date,
    },
    {
      title: 'Total Recoveries',
      icon: recovery,

      bgColor: '#54C5F7',
      textColor: colors.WHITE,
      content: latestCount.Recovered,

      date: date,
    },
    {
      title: 'New Cases',
      icon: newcases,

      bgColor: colors.GREY_VARIANT,
      textColor: '#109FEF',

      content: latestCount.Active,

      date: date,
    },
    {
      title: 'New Death',
      icon: death,

      bgColor: colors.GREY_VARIANT,

      textColor: '#109FEF',
      content: latestCount.Deaths,

      date: date,
    },
  ];

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCountrystats(slug));
  // }, []);

  return (
    <ImageBackground
      source={{
        uri: `https://flagcdn.com/256x192/${CountryCode}.png`,
      }}
      // imageStyle={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      blurRadius={4}
      style={{height: Height, width: Width}}>
      <View style={{flex: 1, padding: 12}}>
        <Icon
          name="arrow-left"
          color={colors.BLACK}
          size={24}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Image
          source={{
            uri: `https://flagcdn.com/256x192/${CountryCode}.png`,
          }}
          style={styles.flagImage}
          // resizeMode="center"
        />
        <Text style={styles.countryName}>{latestCount.Country}</Text>
        {/* <Text style={{color: colors.BLACK}}>{slug}</Text> */}

        <StatsComponent data={countryData} />

        {/* <DataTable>
          <DataTable.Header>
            <DataTable.Title>Date</DataTable.Title>
            <DataTable.Title numeric>Total</DataTable.Title>
            <DataTable.Title numeric>Active</DataTable.Title>
            <DataTable.Title numeric>Recovered</DataTable.Title>
            <DataTable.Title numeric>Death</DataTable.Title>
          </DataTable.Header>
          <ScrollView>
            {countryStats.map((item, index) => {
              var tableDate = moment(item.Date).format('l');

              return (
                <DataTable.Row key={String(index)}>
                  <DataTable.Cell>{tableDate}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.Confirmed}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.Active}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.Recovered}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.Deaths}</DataTable.Cell>
                </DataTable.Row>
              );
            })}
          </ScrollView>
        </DataTable> */}
      </View>
    </ImageBackground>
  );
};

export default countrystats;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  flagImage: {
    height: Height / 6,
    width: Width / 2,
    alignSelf: 'center',
    marginVertical: 8,
  },
  countryName: {
    color: colors.BLACK,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: FONT_SIZE_EXTRA_LARGE,
    fontWeight: '500',
    backgroundColor: '#54C5F7',
    marginBottom: 16,
    width: Width / 2,
    borderRadius: 8,
  },
});
