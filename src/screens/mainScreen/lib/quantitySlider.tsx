import React from 'react';
import Thumb from '../../mainScreen/slider/Thumb';
import Rail from '../../mainScreen/slider/Rail';
import RailSelected from '../../mainScreen/slider/RailSelected';
import Notch from '../../mainScreen/slider/Notch';
import Label from '../../mainScreen/slider/Label';
import {View} from 'react-native';
import Slider from 'rn-range-slider';
import {Text} from '@ui-kitten/components';
interface Props {
  selectedName: string;
  index: any;
  item: any;
  min: any;
  low: any;
  high: any;
  max: any;
  format: string;
  setFormat: (elm: string) => void;
  selectedIndex: any;
  handleValueChange: (s: any, t: any) => void;
}

export const QuantiiyComponent: React.FC<Props> = ({
  selectedName,
  index,
  selectedIndex,
  handleValueChange,
  min,
  max,
  low,
  high,
}) => {
  const renderThumb = React.useCallback(() => <Thumb />, []);
  const renderRail = React.useCallback(() => <Rail />, []);
  const renderRailSelected = React.useCallback(() => <RailSelected />, []);
  const renderLabel = React.useCallback(value => <Label text={value} />, []);
  const renderNotch = React.useCallback(() => <Notch />, []);
  const [rangeDisabled] = React.useState(false);
  const [floatingLabel] = React.useState(false);
  return (
    <>
      {selectedName === 'Quantity' && index === selectedIndex ? (
        <>
          <Slider
            min={min}
            max={max}
            //@ts-ignore
            step={1}
            disableRange={rangeDisabled}
            floatingLabel={floatingLabel}
            renderThumb={renderThumb}
            renderRail={renderRail}
            renderRailSelected={renderRailSelected}
            renderLabel={renderLabel}
            renderNotch={renderNotch}
            onTouchEnd={handleValueChange}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <View
              style={{
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'white',
              }}>
              <Text
                style={{
                  color: 'white',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}>
                {low}
              </Text>
            </View>
            <View
              style={{
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'white',
              }}>
              <Text
                style={{
                  color: 'white',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}>
                {high}
              </Text>
            </View>
          </View>
        </>
      ) : null}
    </>
  );
};
