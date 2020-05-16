import * as React from 'react';
import PropTypes from 'prop-types';

type Format = 'gif' | 'jpg' | 'png';
const defaultColor = '#CECECE';
const defaultTextColor = '#000000';

interface IDummyImage {
  width?: number;
  height?: number;
  color?: string;
  text?: string;
  textColor?: string;
  format: Format;
}

const DummyImage = (props: IDummyImage) => {
  const { width, height, color, text, textColor, format, ...otherProps } = props;

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
      result = result.replace(/\++/g, '*');
      result = result.replace(/\#+/g, '*');
      result = result.replace(/\%+/g, '*');
      result = result.replace(/\&+/g, '*');
      result = result.replace(/\s+/g, '+');
    }
    return result;
  };

  const formatLink = () => {
    const cA = formatColor(color || defaultColor);
    const cB = formatColor(textColor || defaultTextColor);
    const str = formatText(text || 'Dummy+Image');

    let link = `https://dummyimage.com/${width}x${height}/${cA}/${cB}&text=${str}`;

    if (format) {
      link = `https://dummyimage.com/${width}x${height}/${cA}/${cB}.${format}&text=${str}`;
    }
    return link;
  };

  const link = formatLink();

  return <img src={link} {...otherProps} />;
};

DummyImage.defaultProps = {
  width: 300,
  height: 100,
  color: defaultColor,
  text: 'Dummy Image',
  textColor: defaultTextColor,
  format: 'png' as Format,
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
