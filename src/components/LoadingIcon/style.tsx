import styled from 'styled-components';

interface LoadingIconType{
  showLoading: boolean;
}

export const LoadingIcon = styled.div<LoadingIconType>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border-top: 4px solid white;
  border-left: 4px solid white;
  clip-path: polygon(0% 0%, 70% 0%, 70% 100%, 0% 100%);
  animation: spin .5s linear infinite;
  display: ${props => props.showLoading ? "block" : "none"};

  @keyframes spin { 
    from{
      transform: rotate(0deg)
    }
    to{ 
        transform: rotate(360deg); 
    } 
  }
`