import React from 'react';
import {View, Text, Image} from 'react-native';

const countriescomponent = data => {
  const countries = data.data;
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}>
      {countries.map(item => {
        const CountryCode = item.CountryCode.toLowerCase();
        return (
          <View style={{alignItems: 'center', width: 100, marginTop: 8}}>
            <Image
              source={{
                uri: `https://flagcdn.com/256x192/${CountryCode}.png`,
              }}
              style={{height: 100, width: 100}}
            />
            <Text style={{color: '#000000'}}>{item.Country}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default countriescomponent;
