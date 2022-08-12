import styled from 'styled-components';

export const StatsSection = styled.section`
  width: 400px;
  margin-top: ${p => p.theme.space[6]}px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  background-color: ${p => p.theme.colors.muted};
`;
export const Title = styled.h2`
  text-align: center;
`;
export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  padding: ${p => p.theme.space[0]}px;
`;
export const StatItem = styled.li`
  flex-grow: 1;
  border: ${p => p.theme.borders.normal};
  padding: ${p => p.theme.space[4]}px;
`;
export const Label = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.space[3]}px;
  text-align: center;
`;
export const PercentageSpan = styled.span`
  display: block;
  text-align: center;
`;
