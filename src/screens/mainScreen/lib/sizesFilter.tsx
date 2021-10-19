import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Icon} from '@ui-kitten/components';

interface Props {
  selectedName: string;
  index: any;
  size: any;
  selectedIndex: any;
  Filters: any;
  setSizes: (s: any) => void;
  setSizeSelected: (srr: any) => void;
}

export const SizesFilter: React.FC<Props> = ({
  selectedIndex,
  selectedName,
  size,
  Filters,
  index,
  setSizes,
  setSizeSelected,
}) => {
  const _onPressItemSizes = React.useCallback(
    async (ref: any) => {
      let selectedBoxes = [...Filters?.filters[7]?.values];

      if (ref?.selected === false) {
        let objIndex = selectedBoxes.findIndex(
          (obj: any) => obj.id === ref?.id,
        );
        //@ts-ignore
        selectedBoxes[objIndex].selected = true;
        setSizes(selectedBoxes);
      } else {
        let objIndex = selectedBoxes.findIndex(
          (obj: any) => obj.id === ref?.id,
        );
        //@ts-ignore
        selectedBoxes[objIndex].selected = false;
        setSizes(selectedBoxes);
      }
      let listsss = [...size];
      let objs = listsss.filter((obj: any) => obj.selected === true);
      let result = objs.map((b: any) => {
        return b?.name;
      });

      setSizeSelected(result);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [size],
  );
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {selectedName === 'Size' && index === selectedIndex
        ? size?.map((el: any, dd: any) => (
            <TouchableOpacity
              style={{
                borderColor: 'white',
                borderWidth: 1,
                borderRadius: 8,
                paddingVertical: 10,
                paddingHorizontal: 15,
                marginLeft: 10,
                marginVertical: 5,

                backgroundColor: el?.selected ? '#1482B8' : 'transparent',
              }}
              onPress={() => _onPressItemSizes(el)}
              key={dd}>
              <View style={{flexDirection: 'row'}}>
                {el?.selected ? (
                  <>
                    <Icon
                      name="checkmark-outline"
                      style={{width: 22, height: 22, top: 2}}
                      fill="#FFF"
                    />
                    <Text style={{color: 'white'}}>{el?.name}</Text>
                  </>
                ) : (
                  <Text style={{color: 'white'}}>{el?.name}</Text>
                )}
              </View>
            </TouchableOpacity>
          ))
        : null}
    </View>
  );
};
