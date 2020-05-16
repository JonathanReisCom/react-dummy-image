import * as React from 'react';
import PropTypes from 'prop-types';

type Format = 'gif' | 'jpg' | 'png';

interface IDummyImage {
  width?: number;
  height?: number;
  color?: string;
  text?: string;
  textColor?: string;
  format: Format;
}

const DummyImage = (props: IDummyImage) => {
  const formatColor = (color: string) => {
    let result = color;
    if (color && color.charAt(0) === '#') {
      result = color.slice(1, color.length);
    }
    return result;
  };

  const formatText = (text: string) => {
    let result = text;
    if (text) {
      result = text.replace(/[^a-zA-Z ]/g, '');
      result = result.replace(/\s+/g, '+');
    }
    return result;
  };

  const formatLink = () => {
    let link = `https://dummyimage.com/${width}x${height}/${color}/${textColor}&text=${text}`;

    if (props.format) {
      let format = props.format;
      link = `https://dummyimage.com/${width}x${height}/${color}/${textColor}.${format}&text=${text}`;
    }
    return link;
  };

  const width = props.width;
  const height = props.height;
  const color = formatColor(props.color || '#CECECE');
  const textColor = formatColor(props.textColor || '#000000');
  const text = formatText(props.text || 'Dummy+Image');
  const link = formatLink();

  return <img src={link} />;
};

DummyImage.defaultProps = {
  width: 300,
  height: 100,
  color: '#CECECE',
  text: 'Dummy Image',
  textColor: '#000000',
} as Partial<IDummyImage>;

DummyImage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  text: PropTypes.string,
  textColor: PropTypes.string,
  format: PropTypes.oneOf(['gif', 'jpg', 'png']),
};

export default DummyImage;
