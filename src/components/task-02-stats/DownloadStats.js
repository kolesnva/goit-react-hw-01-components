import PropTypes from 'prop-types';
import { Box } from '../Box';
import {
  StatsSection,
  Title,
  StatsList,
  StatItem,
  Label,
  PercentageSpan,
} from './DownloadStatsStyled';

export function Statistics({ data }) {
  return (
    <StatsSection>
      <StatsList>
        {data.map(item => {
          return (
            <StatItem key={item.id}>
              <Label>{item.label}</Label>
              <PercentageSpan>{item.percentage}</PercentageSpan>
            </StatItem>
          );
        })}
      </StatsList>
    </StatsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
