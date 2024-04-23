import React, {FC} from 'react';
import {Image, ImageURISource, View} from 'react-native';
import {styles} from '../utils/styles';

export type MarkerProps = {
  stepMarked: boolean;
};

export type TrackMarksProps = {
  isTrue: boolean;
  thumbImage?: ImageURISource;
  Thumb?: FC<MarkerProps>;
  StepMarker?: FC<MarkerProps>;
};


export const SliderTrackMark = ({
  isTrue,
  thumbImage,
  StepMarker,
  Thumb,
}: TrackMarksProps) => {
  return (
    <View style={styles.trackMarkContainer}>
      {StepMarker ? <StepMarker stepMarked={isTrue} /> : null}

      {Thumb && isTrue ? <Thumb stepMarked={isTrue} /> : null}

      {thumbImage && isTrue ? (
        <View style={styles.thumbImageContainer}>
          <Image source={thumbImage} style={styles.thumbImage} />
        </View>
      ) : null}
    </View>
  );
};
