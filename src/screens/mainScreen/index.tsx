import React from 'react';
import {Header} from '../../components';

import {
  SafeAreaView,
  StatusBar,
  Platform,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  Switch,
} from 'react-native';
import {Filters} from '../../mock/filters';
import {Text, Icon} from '@ui-kitten/components';
import {
  FormatFilter,
  CondtionFilter,
  SliderComponent,
  QuantiiyComponent,
  SizesFilter,
  MatrialFilter,
  BrandFilter,
} from './lib';

export const MainScreen = () => {
  const [format, setFormat] = React.useState('');
  const [condtion, setCondtion] = React.useState('');
  const [low, setLow] = React.useState('');
  const [high, setHigh] = React.useState('');
  const [lowQua, setLowQua] = React.useState('');
  const [isEnabledP, setIsEnabledP] = React.useState(false);
  const toggleSwitch = () => setIsEnabledP(previousState => !previousState);
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitchDiscount = () =>
    setIsEnabled(previousState => !previousState);
  const [matrial, setMatrial] = React.useState<any>(
    Filters?.filters[5]?.values,
  );
  const [size, setSizes] = React.useState<any>(Filters?.filters[7]?.values);

  const [sizeSelected, setSizeSelected] = React.useState<any>([]);
  const [brandName, setBrandName] = React.useState<any>([]);
  const [matrialName, setMatrialName] = React.useState<any>([]);
  const [brand, setBrand] = React.useState<any>(Filters?.filters[6]?.values);
  const [highQua, setHighQua] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState<any>('');
  const [selectedName, setSelectedName] = React.useState('');

  const handleClick = (index: any) => {
    if (selectedIndex === index) {
      setSelectedIndex('');
    } else {
      setSelectedIndex(index);
    }
  };
  const pulseIconRef: any = React.useRef();

  const handleValueChange = (low, high) => {
    setLow(low);
    setHigh(high);
  };
  const handleValueChangeQua = (low, high) => {
    setLowQua(low);
    setHighQua(high);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0,
        backgroundColor: '#0078B2',
      }}>
      <Header />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        {Filters?.filters?.map((item, index) => (
          <View key={index}>
            <View key={index}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 8,
                }}
                key={index}
                onPress={() => {
                  handleClick(index);
                  pulseIconRef.current.startAnimation();
                  setSelectedName(item?.name);
                }}>
                <Text style={{color: '#FFF'}}>{item?.name}</Text>

                <Icon
                  ref={pulseIconRef}
                  animation="zoom"
                  name={
                    index === selectedIndex
                      ? 'chevron-up-outline'
                      : 'chevron-down-outline'
                  }
                  style={{width: 32, height: 32}}
                  fill="#FFF"
                  onPress={() => pulseIconRef.current.startAnimation()}
                />
              </TouchableOpacity>
              <FormatFilter
                format={format}
                item={item}
                index={index}
                selectedIndex={selectedIndex}
                setFormat={setFormat}
                selectedName={selectedName}
              />
              <CondtionFilter
                format={condtion}
                item={item}
                index={index}
                selectedIndex={selectedIndex}
                setFormat={setCondtion}
                selectedName={selectedName}
              />
              <SliderComponent
                min={Filters?.filters[3]?.values[0]?.value}
                max={Filters?.filters[3]?.values[1]?.value}
                low={low}
                high={high}
                item={item}
                format={format}
                setFormat={setFormat}
                handleValueChange={handleValueChange}
                selectedIndex={selectedIndex}
                selectedName={selectedName}
                index={index}
              />
              <QuantiiyComponent
                min={Filters?.filters[4]?.values[0]?.value}
                max={Filters?.filters[4]?.values[1]?.value}
                low={lowQua}
                high={highQua}
                item={item}
                format={format}
                setFormat={setFormat}
                handleValueChange={handleValueChangeQua}
                selectedIndex={selectedIndex}
                selectedName={selectedName}
                index={index}
              />
              <BrandFilter
                matrial={matrial}
                setBrandName={setBrandName}
                selectedIndex={selectedIndex}
                selectedName={selectedName}
                index={index}
                Filters={Filters}
                setMatrial={setMatrial}
              />
              <MatrialFilter
                brand={brand}
                setBrand={setBrand}
                selectedIndex={selectedIndex}
                selectedName={selectedName}
                index={index}
                setMatrialName={setMatrialName}
                Filters={Filters}
              />
              <SizesFilter
                size={size}
                setSizes={setSizes}
                setSizeSelected={setSizeSelected}
                index={index}
                selectedIndex={selectedIndex}
                selectedName={selectedName}
                Filters={Filters}
              />
            </View>

            <View
              style={{
                borderBottomColor: '#C3C3C3',
                borderBottomWidth: 1,
                marginHorizontal: 25,
              }}
            />
          </View>
        ))}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,

            paddingHorizontal: 10,
          }}>
          <Text style={{color: 'white'}}>Products with warranty</Text>
          <Switch
            trackColor={{false: '#056188', true: '#A3CEE3'}}
            thumbColor={isEnabledP ? '#ffff' : '#056188'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabledP}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,

            paddingHorizontal: 10,
          }}>
          <Text style={{color: 'white'}}>Post with discount</Text>
          <Switch
            trackColor={{false: '#056188', true: '#A3CEE3'}}
            thumbColor={isEnabled ? '#ffff' : '#056188'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchDiscount}
            value={isEnabled}
          />
        </View>
        <TouchableOpacity
          style={{marginTop: 20, alignSelf: 'center'}}
          onPress={() =>
            Alert.alert(
              'TheFilters are',
              format +
                ' ' +
                condtion +
                '  ' +
                brandName +
                '  ' +
                matrialName +
                '  ' +
                sizeSelected +
                '  ' +
                low +
                '  ' +
                high +
                '  ' +
                '    ' +
                lowQua +
                '  ' +
                highQua +
                'discount' +
                '   ' +
                isEnabled +
                ' ' +
                'warrnaty' +
                ' ' +
                isEnabledP,
            )
          }>
          <Text>Press Me</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
