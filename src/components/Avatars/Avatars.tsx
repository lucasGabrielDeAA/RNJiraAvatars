import React, { FC, useCallback, useMemo } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Column, Row, Text, ColumnProps as RowProps } from 'src/components';

type AvatarType = {
  id: number;
  avatar_url: string;
};

interface AvatarsProps extends RowProps {
  data: AvatarType[];
  callToAction?(): void;
  imageSize?: number;
  imageRadius?: number;
  showBorder?: boolean;
  label?: string;
  onPress?(): void;
}

const IMAGE_DISTANCE = 12;

const Avatars: FC<AvatarsProps> = ({
  data,
  callToAction,
  imageSize = 50,
  borderColor,
  ...rest
}) => {
  const { colors } = useTheme();

  const generateRandomColor = useCallback(() => {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let index = 0; index < 6; index++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }, []);

  const lastIndex = useMemo(() => {
    return Math.floor(data.length / 2);
  }, [data]);

  const color = useMemo(() => {
    return generateRandomColor();
  }, [generateRandomColor]);

  const label = useMemo(() => {
    return `+ ${data.length - Math.floor(data.length / 2)}`;
  }, [data]);

  return (
    <Row
      alignItems='center'
      as={TouchableOpacity}
      backgroundColor='transparent'
      justifyContent='center'
      my={5}
      onPress={callToAction ? () => callToAction() : () => {}}
      {...rest}
    >
      <>
        {data.slice(0, lastIndex).map((item, index) => (
          <Column
            alignItems='center'
            backgroundColor={colors.secondary}
            borderColor={borderColor ? borderColor : color}
            borderRadius={imageSize / 2}
            borderWidth={2.8}
            height={imageSize}
            key={index}
            justifyContent='center'
            marginLeft={index !== data.length ? `-${IMAGE_DISTANCE}px` : 0}
            overflow='hidden'
            width={imageSize}
            zIndex={data.length - index}
          >
            <Image
              source={{
                uri: item.avatar_url
              }}
              style={{
                borderRadius: imageSize / 2,
                height: imageSize,
                width: imageSize
              }}
            />
          </Column>
        ))}

        <Column
          alignItems='center'
          backgroundColor={colors.gray.n300}
          borderColor={borderColor ? borderColor : color}
          borderRadius={imageSize / 2}
          borderWidth={2.8}
          height={imageSize}
          justifyContent='center'
          marginLeft={`-${IMAGE_DISTANCE}px`}
          overflow='hidden'
          width={imageSize}
          zIndex={1}
        >
          <Text variant='small'>{label}</Text>
        </Column>
      </>
    </Row>
  );
};

export default Avatars;
