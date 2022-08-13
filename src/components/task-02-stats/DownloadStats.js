import PropTypes from 'prop-types';
import {
  StatsSection,
  Title,
  StatsList,
  StatItem,
  Label,
  PercentageSpan,
} from './DownloadStatsStyled';

export function Statistics({ title, stats }) {
  return (
    <StatsSection className="statistics">
      {title && <Title className="title">{title}</Title>}
      <StatsList className="stat-list">
        {stats.map(item => {
          const { id, label, percentage } = item;
          return (
            <StatItem className="item" key={id}>
              <Label className="label">{label}</Label>
              <PercentageSpan className="percentage">
                {percentage + `%`}
              </PercentageSpan>
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
