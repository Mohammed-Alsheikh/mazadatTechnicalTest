import React from 'react';
import {CheckBox} from '@ui-kitten/components';
import {View} from 'react-native';
interface Props {
  selectedName: string;
  index: any;
  brand: any;
  selectedIndex: any;
  Filters: any;
  setBrand: (ss: any) => void;
  setMatrialName: (ss: any) => void;
}

export const MatrialFilter: React.FC<Props> = ({
  selectedIndex,
  selectedName,
  index,
  brand,
  Filters,
  setBrand,
  setMatrialName,
}) => {
  const _onPressItemMatrial = React.useCallback(
    async (ref: any) => {
      let selectedBoxes = [...Filters?.filters[6]?.values];

      if (ref?.selected === false) {
        let objIndex = selectedBoxes.findIndex(
          (obj: any) => obj.id === ref?.id,
        );
        //@ts-ignore
        selectedBoxes[objIndex].selected = true;
        setBrand(selectedBoxes);
      } else {
        let objIndex = selectedBoxes.findIndex(
          (obj: any) => obj.id === ref?.id,
        );
        //@ts-ignore
        selectedBoxes[objIndex].selected = false;
        setBrand(selectedBoxes);
      }
      let listsss = [...brand];
      let objs = listsss.filter((obj: any) => obj.selected === true);
      let result = objs.map((b: any) => {
        return b?.name;
      });

      setMatrialName(result);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [brand],
  );
  return (
    <>
      {selectedName === 'Matrial' && index === selectedIndex ? (
        <View
          style={{
            borderRadius: 4,
            margin: 2,
            padding: 6,
          }}>
          {brand?.map((el: any, ke: any) => (
            <CheckBox
              key={ke}
              checked={el?.selected ? true : false}
              onChange={() => {
                _onPressItemMatrial(el);
              }}
              style={{margin: 2}}
              status="control">
              {el?.name}
            </CheckBox>
          ))}
        </View>
      ) : null}
    </>
  );
};
