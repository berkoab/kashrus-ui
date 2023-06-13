import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import {
    CameraDeviceFormat,
    CameraRuntimeError,
    FrameProcessorPerformanceSuggestion,
    PhotoFile,
    sortFormats,
    useCameraDevices,
    useFrameProcessor,
    VideoFile,
  } from 'react-native-vision-camera';
import { Camera, frameRateIncluded } from 'react-native-vision-camera';
import { CONTENT_SPACING, MAX_ZOOM_FACTOR, SAFE_AREA_PADDING } from './Constants';

const SCALE_FULL_ZOOM = 3;
const BUTTON_SIZE = 40;

function HomeScreen({ navigation }) {
    const devices = useCameraDevices('wide-angle-camera')
    const device = devices.back

    //if (device == null) return <LoadingView />
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Camera
        style={styles.absoluteFill}
        device={device}
        isActive={true}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    captureButton: {
      position: 'absolute',
      alignSelf: 'center',
      bottom: SAFE_AREA_PADDING.paddingBottom,
    },
    button: {
      marginBottom: CONTENT_SPACING,
      width: BUTTON_SIZE,
      height: BUTTON_SIZE,
      borderRadius: BUTTON_SIZE / 2,
      backgroundColor: 'rgba(140, 140, 140, 0.3)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightButtonRow: {
      position: 'absolute',
      right: SAFE_AREA_PADDING.paddingRight,
      top: SAFE_AREA_PADDING.paddingTop,
    },
    text: {
      color: 'white',
      fontSize: 11,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default HomeScreen