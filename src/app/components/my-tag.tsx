import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

type TagPrpos = {
  label?: string;
};

const styles = {
  background: '#17C964',
  boxShadow:
    '0px 10px 15px -3px rgba(23, 201, 100, 0.4), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
  borderRadius: '8px',

  lineHeight: '21px',
  color: '#000',
  justifyContent: 'center',
  padding: '1px 4px',
};

export default function MyTag(props: TagPrpos) {
  return (
    <Flex css={styles}>
      <Text fontSize="12px">{props?.label}</Text>
    </Flex>
  );
}
