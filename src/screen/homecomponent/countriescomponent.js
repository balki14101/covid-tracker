import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchCountrystats} from '../../reducer/covidtracker';

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

      {countries.map(item => {
        const CountryCode = item.ISO2.toLowerCase();
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('countrystats', item);
              dispatch(fetchCountrystats(item.Slug));
            }}>
            <View style={{alignItems: 'center', width: 100, marginTop: 8}}>
              <Image
                source={{
                  uri: `https://flagcdn.com/256x192/${CountryCode}.png`,
                }}
                style={{height: 100, width: 100}}
                resizeMode="center"
              />
              <Text style={{color: '#000000'}}>{item.Country}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default countriescomponent;
