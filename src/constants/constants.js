import {useSelector, useDispatch} from 'react-redux';

import React from 'react';
import {View, Text} from 'react-native';

const constants = () => {
  const {global, countries} = useSelector(state => {
    return {
      global: state.covidtracker.global,
      countries: state.covidtracker.countries,
    };
  });
  const categories = [
    {
      title: 'Total Cases',
      icon: 'form',
      bgColor: '#1CD1A1',
      content: global.TotalConfirmed,
    },
    {
      title: 'Total Recoveries',
      icon: 'filter',
      bgColor: '#54C5F7',
      content: global.TotalRecovered,
    },
    {
      title: 'New Cases',
      icon: 'pushpino',
      bgColor: '#9BC9F7',
      content: global.NewConfirmed,
    },
    {
      title: 'Active Cases',
      icon: 'disconnect',
      bgColor: '#FC9483',
      content: global.NewDeaths,
    },
  ];

  return categories;
};

export default constants;

// const categories = [
//   {
//     title: 'TOP STORIES',
//     icon: 'star',
//     category: 'top_stories',
//   },
//   {
//     title: 'ALL NEWS',
//     icon: 'folder',
//     category: 'all_news',
//   },
//   {
//     title: 'TRENDING',
//     icon: 'adjust',
//     category: 'trending',
//   },
//   {
//     title: 'BOOKMARKS',
//     icon: 'bookmark',
//     category: 'top_stories',
//   },
// ];

// export default categories;
