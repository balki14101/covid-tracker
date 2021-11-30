import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import colors from '../../constants/colors';
import {Height, Width} from '../../constants/dimension';
import {
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_NORMAL,
  FONT_SIZE_SMALL,
} from '../../constants/fontsize';

const globalcomponent = ({data}) => {
  console.log(data);

  // const {data} = props
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}>
      {data.map(item => {
        return (
          <View
            style={{
              backgroundColor: item.bgColor,
              height: Height / 8,
              width: Width / 2.2,
              marginBottom: 8,
              padding: 8,
              borderRadius: 8,
            }}>
            <View
              style={[
                styles.row,
                {justifyContent: 'space-between', alignItems: 'center'},
              ]}>
              <Text style={{color: item.textColor}}>{item.title}</Text>
              <Image
                source={item.icon}
                style={{height: Height / 32, width: Width / 16}}
                resizeMode="center"
              />
            </View>
            <Text
              style={{
                color: item.textColor,
                fontSize: FONT_SIZE_EXTRA_LARGE,
                textAlign: 'center',
                fontWeight: '500',
                marginTop: 4,
              }}>
              {item.content}
            </Text>

            <Text
              style={{
                color: item.textColor,
                fontSize: FONT_SIZE_SMALL,
                marginTop: 4,
              }}>{`last updated:${item.date}`}</Text>
          </View>
        );
      })}
    </View>
    // <View>
    //   <Text>{'this is  global component'}</Text>
    // </View>
  );
};

export default globalcomponent;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
