import React, { createContext, useContext, useState } from 'react';

const SnapImageContext = createContext();

export const useSnapImage = () => useContext(SnapImageContext);

export const SnapImageProvider = ({ children }) => {
  const [snapedImage, setSnapedImage] = useState(null);
  const [filteredImage, setFilteredImage] = useState(null);
  const [selectedHaircolor, setSelectedHairColor] = useState(null)
  const [selectedHairStyle, setSelectedHairStyle] = useState(null)
  const [selectedEyebrow, setSelectedEyebrow] = useState(null)
  const [selectedLipColor, setSelectedLipColor] = useState(null)
  const [activeTab, setActiveTab] = useState('hairstyle');
  const [selectedChoice, setSelectedChoice] = useState({});
  const [gender, setGender] = useState(null);
  const [faceShape, setFaceShape] = useState(null)

  return (
    <SnapImageContext.Provider value={{faceShape, setFaceShape, gender, setGender, selectedChoice, setSelectedChoice, activeTab, setActiveTab, selectedLipColor, setSelectedLipColor, selectedEyebrow, setSelectedEyebrow, snapedImage, setSnapedImage, filteredImage, setFilteredImage, selectedHairStyle, setSelectedHairStyle, selectedHaircolor, setSelectedHairColor }}>
      {children}
    </SnapImageContext.Provider>
  );
};
