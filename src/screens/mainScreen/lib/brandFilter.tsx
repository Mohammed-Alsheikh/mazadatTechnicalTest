import React from 'react';
import {View} from 'react-native';
import {CheckBox} from '@ui-kitten/components';
import {Text} from '@ui-kitten/components';

interface Props {
  selectedName: string;
  index: any;
  matrial: any;
  selectedIndex: any;
  Filters: any;
  setMatrial: (ss: any) => void;
  setBrandName: (ss: any) => void;
}

export const BrandFilter: React.FC<Props> = ({
  Filters,
  selectedIndex,
  selectedName,
  setBrandName,
  setMatrial,
  matrial,
  index,
}) => {
  const _onPressItem = React.useCallback(
    async (ref: any) => {
      let selectedBoxes = [...Filters?.filters[5]?.values];

      if (ref?.selected === false) {
        let objIndex = selectedBoxes.findIndex(
          (obj: any) => obj.id === ref?.id,
        );
        //@ts-ignore
        selectedBoxes[objIndex].selected = true;
        setMatrial(selectedBoxes);
      } else {
        let objIndex = selectedBoxes.findIndex(
          (obj: any) => obj.id === ref?.id,
        );
        //@ts-ignore
        selectedBoxes[objIndex].selected = false;
        setMatrial(selectedBoxes);
      }
      let listsss = [...matrial];
      let objs = listsss.filter((obj: any) => obj.selected === true);
      let result = objs.map((b: any) => {
        return b?.name;
      });

      setBrandName(result);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [matrial],
  );
  return (
    <>
      {selectedName === 'Brand' && index === selectedIndex ? (
        <>
          <View
            style={{
              borderRadius: 4,
              margin: 2,
              padding: 6,
            }}>
            {matrial?.slice(0, 8)?.map((el: any, ke: any) => (
              <CheckBox
                key={ke}
                checked={el?.selected ? true : false}
                onChange={() => {
                  _onPressItem(el);
                }}
                style={{margin: 2}}
                status="control">
                {el?.name}
              </CheckBox>
            ))}
          </View>
          <Text style={{color: 'white', textDecorationLine: 'underline'}}>
            ViewAll {matrial?.length - 8}
          </Text>
        </>
      ) : null}
    </>
  );
};
