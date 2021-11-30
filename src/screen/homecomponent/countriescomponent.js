import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchCountrystats} from '../../reducer/covidtracker';
//colors
import colors from '../../constants/colors';
//dimensions
import {Height, Width} from '../../constants/dimension';
import {ActivityIndicator} from 'react-native-paper';

const countriescomponent = props => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const {global, countries} = useSelector(state => {
    return {
      // global: state.covidtracker.global,
      countries: state.covidtracker.countries,
    };
  });
  console.log('countries props', props);
  const propData = props.data;

  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    return setMasterDataSource(propData), setFilteredDataSource(propData);
  }, []);

  const ItemView = ({item, index}) => {
    const CountryCode = item.ISO2.toLowerCase();

    return (
      // Flat List Item
      <TouchableOpacity
        key={String(index)}
        onPress={() => {
          navigation.navigate('countrystats', item);
          dispatch(fetchCountrystats(item.Slug));
        }}>
        <View style={styles.countryView}>
          <Image
            source={{
              uri: `https://flagcdn.com/256x192/${CountryCode}.png`,
            }}
            style={styles.flag}
            resizeMode="center"
          />
          <Text style={styles.countryName}>{item.Country}</Text>
        </View>
      </TouchableOpacity>
      // </View>
    );
  };

  console.log('propsdata', propData);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={text => setSearch(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholderTextColor={colors.GREY}
        placeholder="Search countries"
      />

      <FlatList
        data={propData.filter(item => {
          // console.log('list item', item.Country);
          // return true;

          return item.Country.includes(search);
        })}
        keyExtractor={(item, index) => index.toString()}
        // ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        contentContainerStyle={{marginLeft: 10}}
        // horizontal={true}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    flex: 1,
  },
  itemStyle: {
    padding: 10,
    color: colors.BLACK,
  },
  textInputStyle: {
    height: Height / 20,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#109FEF',
    borderRadius: 8,
    color: colors.BLACK,
    backgroundColor: '#FFFFFF',
  },
  countryView: {
    alignItems: 'center',
    width: Width / 3.6,
    marginTop: 8,
    backgroundColor: colors.WHITE,
    borderRadius: 8,
    height: Height / 5.8,
    marginRight: 8,
  },
  flag: {
    height: Height / 8,
    width: Width / 4,
  },
  countryName: {
    color: colors.BLACK,
    fontWeight: '500',
  },
});

export default countriescomponent;
