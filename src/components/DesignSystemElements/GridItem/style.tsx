import styled from 'styled-components';

interface ContainerType{
  column: string;
  row: string;
}

export const Container = styled.div<ContainerType>`
  width: 100%;
  height: 100%;
  grid-column: ${({column}) => column};
  grid-row: ${({row}) => row}
`