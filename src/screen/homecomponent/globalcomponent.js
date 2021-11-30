import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import colors from '../../constants/colors';
//Dimensions
import {Height, Width} from '../../constants/dimension';
//fontSize
import {
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_NORMAL,
  FONT_SIZE_SMALL,
} from '../../constants/fontsize';

const globalcomponent = ({data}) => {
  //   console.log(data);

  // const {data} = props
  return (
    <View style={styles.globalView}>
      {data.map((item, index) => {
        return (
          <View
            key={String(index)}
            style={[
              styles.cardView,
              {
                backgroundColor: item.bgColor,
              },
            ]}>
            <View
              style={[
                styles.row,
                {justifyContent: 'space-between', alignItems: 'center'},
              ]}>
              <Text style={{color: item.textColor}}>{item.title}</Text>
              <Image
                source={item.icon}
                style={styles.iconStyles}
                resizeMode="center"
              />
            </View>
            <Text
              style={[
                styles.countText,
                {
                  color: item.textColor,
                },
              ]}>
              {item.content}
            </Text>

            <Text
              style={[
                styles.dateText,
                {
                  color: item.textColor,
                },
              ]}>{`last updated:${item.date}`}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default globalcomponent;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  globalView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardView: {
    height: Height / 8,
    width: Width / 2.2,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },
  iconStyles: {
    height: Height / 32,
    width: Width / 16,
  },
  countText: {
    fontSize: FONT_SIZE_EXTRA_LARGE,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 4,
  },
  dateText: {
    fontSize: FONT_SIZE_SMALL,
    marginTop: 4,
  },
});
