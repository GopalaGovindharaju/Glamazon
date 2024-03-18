import React, { createContext, useContext, useState } from 'react';

const SnapImageContext = createContext();

export const useSnapImage = () => useContext(SnapImageContext);

export const SnapImageProvider = ({ children }) => {
  const [snapedImage, setSnapedImage] = useState(null);
  const [filteredImage, setFilteredImage] = useState(null);
  const [selectedHaircolor, setSelectedHairColor] = useState('')
  const [selectedHairStyle, setSelectedHairStyle] = useState('')

  return (
    <SnapImageContext.Provider value={{ snapedImage, setSnapedImage, filteredImage, setFilteredImage, selectedHairStyle, setSelectedHairStyle, selectedHaircolor, setSelectedHairColor }}>
      {children}
    </SnapImageContext.Provider>
  );
};
