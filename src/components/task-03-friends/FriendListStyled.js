import styled from 'styled-components';

export const List = styled.ul`
  width: 400px;
  margin-top: ${p => p.theme.space[6]}px;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.lg};
  background-color: ${p => p.theme.colors.muted};
  list-style: none;
`;
export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.lg};
  border: ${p => p.theme.borders.normal};
  :hover {
    background-color: ${p => p.theme.colors.primary};
  }
`;
export const Status = styled.span`
  display: block;
  width: ${p => p.theme.space[5]}px;
  height: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.round};
  ${({ isOnline }) => `
    background-color: ${isOnline ? '#375623' : '#C00000'};
  `};
`;
export const Avatar = styled.img`
  display: block;
  width: 80px;
  margin: 0 auto;
`;
export const Name = styled.p`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
`;
