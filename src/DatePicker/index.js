import React, {useState, useRef, useEffect} from 'react';
import Picker from '../Picker';
import {useDateRange, valueToDate, dateToValue, renderDateLabel} from '../common';
import useControlValue from "@kne/use-control-value";

const classPrefix = `adm-date-picker`;

const DatePicker = (props) => {
  const {precision, max, min, renderLabel, soFar, ...others} = props;
  const [value, onChange] = useControlValue(props);
  const [innerValue, setInnerValueChange] = useState(dateToValue(value));

  useEffect(() => {
    setInnerValueChange(dateToValue(value));
  }, [value]);

  const range = useDateRange({
    precision, value: valueToDate(innerValue), max, min, renderLabel, soFar
  });

  const rangeRef = useRef([]);
  rangeRef.current = range;

  return <Picker {...others} columns={range} value={dateToValue(value)}
                 onColumnChange={(value) => {
                   setInnerValueChange(value);
                 }} onChange={(value) => {
    onChange(valueToDate(value));
  }} className={classPrefix}/>;
};

DatePicker.defaultProps = {
  min: new Date('1949-10-01'), max: new Date(), defaultValue: new Date(), precision: 'day', renderLabel: renderDateLabel
};

export default DatePicker;
