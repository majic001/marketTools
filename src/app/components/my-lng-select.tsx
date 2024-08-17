import { TriangleDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import enIcon from '../../static/svg/flag/enIcon.svg';
import zhIcon from '../../static/svg/flag/zhIcon.svg';
const list: any = {
  en: {
    label: 'English',
    icon: enIcon,
    value: 'en',
  },
  zh: {
    label: '中文',
    icon: zhIcon,
    value: 'zh',
  },
};
export default function MySelect() {
  const [getCurrentLng, setCurrentLng] = useState<string>('en');
  const { t, i18n } = useTranslation();
  useEffect(() => {
    setCurrentLng(i18n.language);
    console.log(i18n.language, 'language');
  }, []);
  return (
    <Menu>
      <MenuButton
        as={Button}
        bg="#222"
        h="45px"
        w="full"
        borderRadius="12px"
        rightIcon={<TriangleDownIcon boxSize={3} />}
      >
        <Flex alignItems="center" w="full">
          <Image
            src={list[getCurrentLng]?.icon}
            alt=""
            style={{ width: '25px' }}
          />
          <Text pl={2} fontSize="14px" color="#fff">
            {list[getCurrentLng]?.label}
          </Text>
        </Flex>
      </MenuButton>
      <MenuList>
        {Object.values(list)?.map((res: any, index) => {
          return (
            <MenuItem
              key={index}
              onClick={() => {
                setCurrentLng(res?.value);
                i18n.changeLanguage(res?.value);
              }}
            >
              <Image src={res?.icon} alt="" style={{ width: '25px' }} />
              <Text pl={2} fontSize="14px">
                {res?.label}
              </Text>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
