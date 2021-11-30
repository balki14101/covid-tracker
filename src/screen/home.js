import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {fetchSummary, fetchCountries} from '../reducer/covidtracker';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
//components
import Globalcomponent from './homecomponent/globalcomponent';
import Countriescomponent from './homecomponent/countriescomponent';
//colors
import colors from '../constants/colors';
import categories from '../constants/constants';
//Icons
import totalcases from '../assets/covid-white-1.png';
import recovery from '../assets/vaccine-white.png';
import newcases from '../assets/Vector-1.png';
import death from '../assets/coffin-gradient.png';
import Logo from '../assets/Vector.png';
//fontSize
import {FONT_SIZE_EXTRA_LARGE, FONT_SIZE_MEDIUM} from '../constants/fontsize';
//Dimensions
import {Height, Width} from '../constants/dimension';

const home = () => {
  const {global, countries} = useSelector(state => {
    return {
      global: state.covidtracker.global,
      countries: state.covidtracker.countries,
    };
  });

  const date = moment(global.Date).format('MMM Do YY');
  const globalData = [
    {
      title: 'Total Cases',
      icon: totalcases,
      bgColor: '#109FEF',
      textColor: colors.WHITE,
      content: global.TotalConfirmed,
      date: date,
    },
    {
      title: 'Total Recoveries',
      icon: recovery,

      bgColor: '#54C5F7',
      textColor: colors.WHITE,
      content: global.TotalRecovered,
      date: date,
    },
    {
      title: 'New Cases',
      icon: newcases,

      bgColor: colors.GREY_VARIANT,
      textColor: '#109FEF',

      content: global.NewConfirmed,
      date: date,
    },
    {
      title: 'New Death',
      icon: death,

      bgColor: colors.GREY_VARIANT,

      textColor: '#109FEF',
      content: global.NewDeaths,
      date: date,
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSummary());
    dispatch(fetchCountries());
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: colors.BLACK}}>
      <Image source={Logo} style={styles.logo} resizeMode="center" />
      <ScrollView>
        <View style={{padding: 12}}>
          <Text style={styles.titleText}>{'Global'}</Text>

          <Globalcomponent data={globalData} />
          <Text style={styles.titleText}>{'Countries'}</Text>

          <Countriescomponent data={countries} />
        </View>
      </ScrollView>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  logo: {
    height: Height / 16,
    width: Width,
    marginVertical: 10,
  },
  titleText: {
    color: colors.LIGHT_BLUE,
    fontSize: FONT_SIZE_EXTRA_LARGE,
    fontWeight: '500',
    marginVertical: 4,
  },
});
