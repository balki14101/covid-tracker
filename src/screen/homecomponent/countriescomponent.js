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
import colors from '../../constants/colors';
import {Height, Width} from '../../constants/dimension';
/*
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
*/

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

  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    //   fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(responseJson => {
    //       setFilteredDataSource(responseJson);
    //       setMasterDataSource(responseJson);
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });

    setMasterDataSource(props.data);
    setFilteredDataSource(props.data);
  }, []);

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.Country
          ? item.Country.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({item, index}) => {
    const CountryCode = item.ISO2.toLowerCase();

    return (
      // Flat List Item
      // <Text style={styles.itemStyle} onPress={() => getItem(item)}>
      //   {item.Country.toUpperCase()}
      // </Text>
      // <View
      //   style={{
      //     flexDirection: 'row',
      //     flexWrap: 'wrap',
      //     justifyContent: 'space-between',
      //   }}>
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

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholderTextColor={colors.GREY}
          placeholder="Search countries"
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          // ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
          contentContainerStyle={{marginLeft: 10}}
          // horizontal={true}
          numColumns={3}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
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
