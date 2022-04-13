import styled from 'styled-components';

interface ContainerType{
  templateColumns: string;
  templateRows: string;
}

export const Container = styled.div<ContainerType>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: ${({ templateColumns }) => templateColumns};
  grid-template-rows: ${({ templateRows }) => templateRows}
`