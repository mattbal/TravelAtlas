import React from 'react';
import Svg, { Path, SvgXml } from 'react-native-svg';

const HomeIcon = ({ color }) => {
  return (
    <Svg width='20px' height='20px' viewBox='0 0 20 20' fill={color}>
      <Path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
    </Svg>
  );
};
export { HomeIcon };

const SearchIcon = ({ color }) => {
  return (
    <Svg width='20px' height='20px' viewBox='0 0 20 20' fill={color}>
      <Path
        fillRule='evenodd'
        d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
      />
    </Svg>
  );
};
export { SearchIcon };

const TripsIcon = ({ color }) => {
  return (
    <Svg width='20px' height='20px' viewBox='0 0 20 20' fill={color}>
      <Path
        fillRule='evenodd'
        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
      />
    </Svg>
  );
};
export { TripsIcon };

const ProfileIcon = ({ color }) => {
  return (
    <Svg width='20px' height='20px' viewBox='0 0 20 20' fill={color}>
      <Path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' />
    </Svg>
  );
};
export { ProfileIcon };

const BackIcon = ({ color }) => {
  return (
    <Svg width='20px' height='20px' viewBox='0 0 20 20' fill={color}>
      <Path
        fillRule='evenodd'
        d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
      />
    </Svg>
  );
};

export { BackIcon };
