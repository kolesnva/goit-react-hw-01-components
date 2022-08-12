import styled from 'styled-components';

export const UserImage = styled.img`
  width: 220px;
  display: block;
  margin: 0 auto;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.muted};
`;

export const UserName = styled.p`
  text-align: center;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const UserTag = styled.p`
  text-align: center;
`;
export const UserLocation = styled.p`
  text-align: center;
`;
export const UserStatsList = styled.ul`
  display: flex;
  list-style: none;
  gap: ${p => p.theme.space[4]}px;
`;
export const StatItem = styled.li``;
export const ItemSpan = styled.span``;
