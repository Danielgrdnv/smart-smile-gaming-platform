import React from 'react';
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const LazyImage = (props: LazyLoadImageProps): JSX.Element => (
  <LazyLoadImage {...props} draggable='false' effect='blur' />
);
