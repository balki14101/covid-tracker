import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchCountrystats} from '../../reducer/covidtracker';
import colors from '../../constants/colors';
import {Height, Width} from '../../constants/dimension';

const countriescomponent = data => {
  const countries = data.data;
  console.log('countriescomponent props', countries);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  // console.log('countries component props', data);
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}>
      {/* <Text style={{color: '#000000'}}>{'countries component'}</Text> */}

      {countries.map((item, index) => {
        const CountryCode = item.ISO2.toLowerCase();
        return (
          <TouchableOpacity
            key={String(index)}
            onPress={() => {
              navigation.navigate('countrystats', item);
              dispatch(fetchCountrystats(item.Slug));
            }}>
            <View
              style={{
                alignItems: 'center',
                width: 100,
                marginTop: 8,
                backgroundColor: colors.WHITE,
                borderRadius: 8,
                height: Height / 5.8,
              }}>
              <Image
                source={{
                  uri: `https://flagcdn.com/256x192/${CountryCode}.png`,
                }}
                style={{height: Height / 8, width: Width / 4}}
                resizeMode="center"
              />
              <Text
                style={{
                  color: colors.BLACK,
                  fontWeight: '500',
                }}>
                {item.Country}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default countriescomponent;
