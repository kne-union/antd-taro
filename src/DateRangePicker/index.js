import React, {useState, useEffect} from 'react';
import Picker from '../Picker';
import {useDateRange, valueToDate, dateToValue, renderDateLabel, precisionToLength} from '../common';
import useControlValue from "@kne/use-control-value";

const classPrefix = `adm-date-picker`;

const DateRangePicker = (props) => {
  const {precision, max, min, renderLabel, soFar, ...others} = props;
  const [valueProp, onChange] = useControlValue(props);
  const value = valueProp || others.defaultValue;
  const [innerValue, setInnerValueChange] = useState([dateToValue(value[0], precision), dateToValue(value[1]), precision]);

  useEffect(() => {
    setInnerValueChange([dateToValue(value[0], precision), dateToValue(value[1], precision)]);
  }, [precision, value]);

  const rangeStart = useDateRange({
    precision, value: valueToDate(innerValue[0]), max, min, renderLabel
  });
  const rangeEnd = useDateRange({
    precision, value: valueToDate(innerValue[1]), max, min: valueToDate(innerValue[0]), renderLabel, soFar
  });

  const length = precisionToLength(precision);

  return <Picker {...others} columns={[...rangeStart, ...rangeEnd]}
                 value={[...dateToValue(value[0], precision), ...dateToValue(value[1], precision)]}
                 onColumnChange={(value) => {
                   setInnerValueChange([value.slice(0, length), value.slice(length)]);
                 }} onChange={(value) => {
    onChange([valueToDate(value.slice(0, length)), valueToDate(value.slice(length))]);
  }} className={classPrefix}/>;
};

DateRangePicker.defaultProps = {
  min: new Date('1949-10-01'),
  max: new Date(),
  defaultValue: [new Date(), new Date()],
  precision: 'month',
  renderLabel: renderDateLabel
};

export default DateRangePicker;
