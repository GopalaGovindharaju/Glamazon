import React, { useState } from 'react'
import Choice from './Choice'
import ChoiceImagePart from './ChoiceImagePart'
import ChoiceStyledPart from './ChoiceStyledPart'

function ChoiceStyleditems() {
    const [loading, setLoading] = useState(false);
    const [shownImage, setShownImage] = useState(false);


  return (
    <div>
      <Choice/>
      <ChoiceImagePart loading={loading} setShownImage={setShownImage} shownImage={shownImage}/>
      <ChoiceStyledPart/>

    </div>
  )
}

export default ChoiceStyleditems
