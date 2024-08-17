import { Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const item = {
  color: '#fff',
  maxWidth: '150px',
};
const item_active = {
  backgroundColor: '#FFB119',
  color: '#000',
  borderRadius: '10px',
  maxWidth: '150px',
};

export default function MyRadio(props: any) {
  const [value, setValue] = useState('');
  useEffect(() => {
    setValue(props?.value);
  }, [props?.value]);
  return (
    <Flex flexWrap="wrap" w="full" minH="45px">
      {props?.label ? (
        <Flex mb="5px">
          <Text fontSize="0.9em" fontWeight={600}>
            {props?.label || '标题'}
          </Text>
        </Flex>
      ) : (
        ''
      )}
      <Flex
        bg="#222"
        h="45px"
        borderRadius="12px"
        cursor="pointer"
        alignItems="center"
        w="full"
        fontSize="15px"
        justifyContent="center"
      >
        {props?.items?.map((res: any, index: number) => {
          return (
            <Flex
              key={index}
              style={res?.value === value ? item_active : item}
              fontSize="0.9em"
              fontWeight={600}
              justifyContent="center"
              py="8px"
              flex={1}
              onClick={() => {
                setValue(res?.value);
                props?.onChange?.(res?.value);
              }}
            >
              {res?.label}
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}
