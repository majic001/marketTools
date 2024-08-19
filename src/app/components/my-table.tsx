import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import MyPagination from './my-pagination';

export default function MyTable(props: any) {

  return (
    <>
      <TableContainer w="full">
        <Table variant="simple" w="full">
          <Thead bg="#222" w="full">
            <Tr w="full">
              {props?.columns?.map((res: any, index: number) => {
                return <Th key={index}>{res?.title}</Th>;
              })}
            </Tr>
          </Thead>
          <Tbody w="full">
            {props?.dataSource?.map((res: any, index: number) => {
              return (
                <Tr color="#BABABA" key={index} w="full">
                  {props?.columns?.map((k: any, idx: number) => {
                    return k?.render ? (
                      <Td key={idx}>{k?.render(res)}</Td>
                    ) : (
                      <Td key={idx}>{res[k?.dataIndex]}</Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex py={5}>
        <MyPagination />
      </Flex>
    </>
  );
}
