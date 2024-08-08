import { Button } from '@chakra-ui/react';

export default function MyPrimaryButton(props: any) {
  return (
    <Button w="full" size={props?.size || 'md'} bg={props?.bg || 'blue.500'}>
      {props?.label || '按钮'}
    </Button>
  );
}
