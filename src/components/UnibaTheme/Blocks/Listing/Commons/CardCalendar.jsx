import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import cx from 'classnames';
import {
  viewDate,
  getRealStartAndEndWithRecurrence,
} from 'design-comuni-plone-theme/helpers';

import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

const messages = defineMessages({
  from: {
    id: 'from',
    defaultMessage: 'dal',
  },
  to: {
    id: 'to',
    defaultMessage: 'al',
  },
});

export const CardCalendar = ({ start, end, recurrence, rrule }) => {
  const intl = useIntl();
  const rrulestr = rrule.rrulestr;
  const _start = start && viewDate(intl.locale, start);
  const _end = end && viewDate(intl.locale, end);

  const recurrenceDates = getRealStartAndEndWithRecurrence(
    intl.locale,
    _start,
    recurrence,
    rrulestr,
    intl,
  );
  if ((_start && _end) || recurrenceDates) {
    if (!recurrenceDates) {
      if (_start.isSame(_end, 'day')) {
        return (
          <div className="card-calendar d-flex flex-column justify-content-center">
            <span className="card-date date">{_start.format('D')}</span>
            <span className="card-day date">{_end.format('MMMM')}</span>
          </div>
        );
      } else if (!_start.isSame(_end, 'year')) {
        return (
          <div className="custom-calendar-card">
            <div className="card-calendar extended d-flex flex-column justify-content-center px-2 w-auto">
              <span className="card-date d-flex justify-content-between align-items-baseline">
                <div className="date-label me-1">
                  {intl.formatMessage(messages.from)}
                </div>
                <span className="date">{_start.format('DD/MM/YY')}</span>
              </span>
              <span className="card-date d-flex justify-content-between align-items-baseline">
                <div className="date-label me-1">
                  {intl.formatMessage(messages.to)}
                </div>
                <span className="date">{_end.format('DD/MM/YY')}</span>
              </span>
            </div>
          </div>
        );
      } else {
        return (
          <div className="custom-calendar-card">
            <div className="card-calendar extended d-flex flex-column justify-content-center px-2">
              <span className="card-date d-flex justify-content-between align-items-baseline">
                <div className="date-label me-1">
                  {intl.formatMessage(messages.from)}
                </div>
                <span className="date">{_start.format('DD/MM')}</span>
              </span>
              <span className="card-date d-flex justify-content-between align-items-baseline">
                <div className="date-label me-1">
                  {intl.formatMessage(messages.to)}
                </div>
                <span className="date">{_end.format('DD/MM')}</span>
              </span>
            </div>
          </div>
        );
      }
    } else if (recurrenceDates) {
      let dateFormat = 'DD/MM';
      if (
        !recurrenceDates?.recurrenceStart?.isSame(
          recurrenceDates?.recurrenceEnd,
          'year',
        )
      )
        dateFormat = 'DD/MM/YY';
      return (
        <div className="custom-calendar-card">
          <div
            className={cx(
              'card-calendar extended d-flex flex-column justify-content-center px-2',
              {
                'w-auto': dateFormat !== 'DD/MM',
              },
            )}
          >
            <span className="card-date d-flex justify-content-between align-items-baseline">
              <div className="date-label me-1">
                {intl.formatMessage(messages.from)}
              </div>
              <span className="date">
                {recurrenceDates.recurrenceStart?.format(dateFormat)}
              </span>
            </span>
            <span className="card-date d-flex justify-content-between align-items-baseline">
              <div className="date-label me-1">
                {intl.formatMessage(messages.to)}
              </div>
              <span className="date">
                {recurrenceDates?.recurrenceEnd?.format(dateFormat)}
              </span>
            </span>
          </div>
        </div>
      );
    } else if (_start.format('M') === _end.format('M')) {
      return (
        <div className="custom-calendar-card">
          <div className="card-calendar d-flex flex-column justify-content-center">
            <span className="card-date d-flex justify-content-center align-items-baseline">
              <span className="date day start-date">{_start.format('D')}</span>{' '}
              <span className="date day divider">-</span>{' '}
              <span className="date day end-date">{_end.format('D')}</span>
            </span>
            <span className="card-date d-flex justify-content-center align-items-baseline">
              <span className="date month">{_end.format('MMM')}</span>
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="custom-calendar-card">
          <div className="card-calendar extended d-flex flex-column justify-content-center px-2">
            <span className="card-date d-flex justify-content-between align-items-baseline">
              <div className="date-label me-1">
                {intl.formatMessage(messages.from)}
              </div>
              <span className="date">{_start.format('DD/MM')}</span>
            </span>
            <span className="card-date d-flex justify-content-between align-items-baseline">
              <div className="date-label me-1">
                {intl.formatMessage(messages.to)}
              </div>
              <span className="date">{_end.format('DD/MM')}</span>
            </span>
          </div>
        </div>
      );
    }
  } else {
    return <></>;
  }
};

CardCalendar.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  recurrence: PropTypes.string,
};

export default injectLazyLibs(['rrule'])(CardCalendar);
