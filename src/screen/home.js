import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {fetchSummary} from '../reducer/covidtracker';
import {useSelector, useDispatch} from 'react-redux';
import Globalcomponent from './homecomponent/globalcomponent';
import Countriescomponent from './homecomponent/countriescomponent';
import colors from '../constants/colors';
import categories from '../constants/constants';
import totalcases from '../assets/covid-white-1.png';
import recovery from '../assets/vaccine-white.png';
import newcases from '../assets/Vector-1.png';
import death from '../assets/coffin-gradient.png';
import moment from 'moment';
import {FONT_SIZE_EXTRA_LARGE, FONT_SIZE_MEDIUM} from '../constants/fontsize';
import {ScrollView} from 'react-native-gesture-handler';

const home = () => {
  const {global, countries} = useSelector(state => {
    return {
      global: state.covidtracker.global,
      countries: state.covidtracker.countries,
    };
  });

  const date = moment(global.Date).format('MMM Do YY');
  const categories = [
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
      title: 'Active Cases',
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
  }, []);
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: colors.WHITE, padding: 12}}>
        <Text
          style={{
            color: colors.LIGHT_BLUE,
            fontSize: FONT_SIZE_EXTRA_LARGE,
            fontWeight: '500',
            marginVertical: 4,
          }}>
          {'Global'}
        </Text>

        <Globalcomponent data={categories} />
        <Text
          style={{
            color: colors.LIGHT_BLUE,
            fontSize: FONT_SIZE_EXTRA_LARGE,
            fontWeight: '500',
            marginVertical: 4,
          }}>
          {'Countries'}
        </Text>

        <Countriescomponent data={countries} />
      </View>
    </ScrollView>
  );
};

export default home;
