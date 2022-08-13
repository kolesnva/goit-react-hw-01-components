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
