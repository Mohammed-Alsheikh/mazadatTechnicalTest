import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Icon} from '@ui-kitten/components';
interface Props {
  selectedName: string;
  index: any;
  item: any;
  format: string;
  setFormat: (elm: string) => void;
  selectedIndex: any;
}
export const CondtionFilter: React.FC<Props> = ({
  selectedName,
  index,
  item,
  format,
  setFormat,
  selectedIndex,
}) => {
  return (
    <View style={{flexDirection: 'row', margin: 5}}>
      {selectedName === 'Condtion' && index === selectedIndex
        ? item?.values?.map((elm: any, key: any) => (
            <TouchableOpacity
              style={{
                borderColor: 'white',
                borderWidth: 1,
                borderRadius: 8,
                paddingVertical: 10,
                paddingHorizontal: 15,
                marginLeft: 10,
                backgroundColor:
                  format === elm?.name ? '#1482B8' : 'transparent',
              }}
              onPress={() => setFormat(elm?.value)}
              key={key}>
              <View style={{flexDirection: 'row'}}>
                {format === elm?.name ? (
                  <Icon
                    name="checkmark-outline"
                    style={{width: 22, height: 22, top: 2}}
                    fill="#FFF"
                  />
                ) : null}
                <Text style={{color: 'white'}}>{elm?.name}</Text>
              </View>
            </TouchableOpacity>
          ))
        : null}
    </View>
  );
};
