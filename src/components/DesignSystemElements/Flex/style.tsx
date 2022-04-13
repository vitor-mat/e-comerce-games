import styled from 'styled-components';

interface FlexType{
  alignItems: string;
  justifyContent: string;
}

export const Flex = styled.div<FlexType>`
  width: 100%;
  display: flex;
  align-items: ${({ alignItems}) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
`