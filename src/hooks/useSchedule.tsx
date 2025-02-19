import React, { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../utils/axios';

interface ScheduleProviderProps {
  children: React.ReactNode;
}

const ScheduleContext = createContext<any>(null);

export const ScheduleProvider = ({ children }: ScheduleProviderProps) => {
  const [scheduleList, setScheduleList] = useState([]);
  const [schedule, setSchedule] = useState<string>('');

  useEffect(() => {
    getSchedules();
  }, []);

  useEffect(() => {
    console.log('scheduleList 변경됨 useSchedule');
  }, [scheduleList]);

  const getSchedules = async (): Promise<any[]> => {
    try {
      await api.get('/schedules').then((response) => {
        if (response.data.length < 0) {
          throw new Error(response.statusText);
        }
        setScheduleList(response.data);
        return response.data;
      });
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  const postSchedule = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    try {
      setSchedule('');
      e.preventDefault();

      await api.post('/schedules', { text: schedule }).then(async () => {
        const updatedSchedules = await getSchedules();
        if (updatedSchedules) {
          setScheduleList(updatedSchedules);
        }
      });
    } catch (e) {
      console.error(e);
    }
  };

  const deleteSchedule = async (clickedSchedule: number) => {
    try {
      await api
        .delete(`/schedules/${clickedSchedule}`)
        .then(() => getSchedules());
    } catch (e) {
      console.error(e);
    }
  };

  return (
    // scheduleList,
    // schedule,
    // setSchedule,
    // getSchedules,
    // postSchedule,
    // deleteSchedule,
    <ScheduleContext.Provider
      value={{
        scheduleList,
        getSchedules,
        postSchedule,
        deleteSchedule,
        setSchedule,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};

export const useSchedules = () => useContext(ScheduleContext);
