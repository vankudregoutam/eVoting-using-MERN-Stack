import React, { useState } from 'react';
import Webcam from 'react-webcam';

const WebCam = () => {
  const [image, setImage] = useState(null);

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    // Now you can send the captured image to the Face API
    // and store the data in MongoDB.
  }, [webcamRef]);

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture</button>
      {image && <img src={image} alt="Captured" />}
    </div>
  );
};

export default WebCam;
