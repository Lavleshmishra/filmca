/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import moment from 'moment';

const useDate = () => {
  const [loading, setLoading] = useState(true);
  const today = new Date();

  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  let schudleDate = today.toLocaleDateString('en-US', options);
  const [todayLogDate, setTodayLogDate] = useState(schudleDate);
  const finddate = moment().utcOffset('+05:30').format('YYYY-MM-DD');
  const findTime = today.toLocaleTimeString();
  const [currentdate, setCurrentdate] = useState(finddate);
  const [time, setTime] = useState(findTime);
  var start = moment().startOf('day').toDate();
  var end = moment().endOf('day').toDate();
  const endHours = end.getHours();
  const startHours = start.getHours();
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) + 1;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '00' : '00';
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  function formatCTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '00' : '00';
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  const timeCurrent = formatCTime(new Date());
  const timeGo = formatAMPM(new Date());

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setCurrentdate(currentdate);
      setTime(time);
      setLoading(false);
    }
    return () => (isMounted = false);
  }, [currentdate, time]);

  return {
    currentdate,
    setCurrentdate,
    time,
    setTime,
    todayLogDate,
    setTodayLogDate,
    timeGo,
    timeCurrent,
    endHours,
    startHours,
  };
};

export default useDate;
