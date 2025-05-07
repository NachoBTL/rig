import {
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isBefore,
  isAfter,
  startOfDay,
  endOfDay,
  getYear,
  getMonth,
} from 'date-fns';
import { useCallback, useEffect, useMemo, useState } from 'react';

interface MonthOption {
  value: number;
  label: string;
}

interface DatePickerConfig {
  minDate?: Date;
  maxDate?: Date;
}

interface CalendarGrid {
  paddedDays: (Date | null)[];
  monthStart: Date;
  monthEnd: Date;
}

interface NavigationControls {
  nextMonth: () => void;
  prevMonth: () => void;
}

interface UseDatePickerReturn {
  open: boolean;
  setOpen: (open: boolean) => void;
  currentDate: Date;
  paddedDays: (Date | null)[];
  isDisabled: (day: Date | null) => boolean;
  getAvailableMonths: () => MonthOption[];
  getAvailableYears: () => number[];
  navigation: NavigationControls;
  handleMonthChange: (month: string) => void;
  handleYearChange: (year: string) => void;
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
  selectDate: (date: Date) => void;
}

const MONTHS: MonthOption[] = Array.from({ length: 12 }, (_, i) => ({
  value: i,
  label: new Date(0, i).toLocaleString('default', { month: 'long' }),
}));

const YEAR_RANGE_SIZE = 21;
const YEAR_RANGE_OFFSET = Math.floor(YEAR_RANGE_SIZE / 2);

const createNullArray = (length: number) => Array.from({ length }, () => null);

const clampDate = (candidate: Date, min?: Date, max?: Date): Date => {
  if (!(candidate instanceof Date) || isNaN(candidate.getTime())) {
    return min ?? max ?? new Date();
  }

  const day = startOfDay(candidate);

  if (min && isBefore(day, startOfDay(min))) {
    return startOfDay(min);
  }

  if (max && isAfter(day, startOfDay(max))) {
    return startOfDay(max);
  }

  return day;
};

export const useDatePicker = ({ minDate, maxDate }: DatePickerConfig): UseDatePickerReturn => {
  const [open, setOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(() => clampDate(new Date(), minDate, maxDate));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const today = startOfDay(new Date());

  const { monthStart, monthEnd, days, startDay, endDay } = useMemo(() => {
    const start = startOfMonth(currentDate);
    const end = endOfMonth(start);

    return {
      monthStart: start,
      monthEnd: end,
      days: eachDayOfInterval({ start, end }),
      startDay: start.getDay(),
      endDay: 6 - end.getDay(),
    };
  }, [currentDate]);

  const calendarGrid = useMemo<CalendarGrid>(
    () => ({
      paddedDays: [
        ...createNullArray(Math.max(0, startDay)),
        ...days,
        ...createNullArray(Math.max(0, endDay)),
      ],
      monthStart,
      monthEnd,
    }),
    [startDay, days, endDay, monthStart, monthEnd]
  );

  const isDisabled = useCallback(
    (day: Date | null): boolean => {
      if (!day || !isSameMonth(day, currentDate)) return true;

      if (isBefore(day, today)) return true;

      if (minDate && isBefore(day, startOfDay(minDate))) return true;

      if (maxDate && isBefore(endOfDay(maxDate), day)) return true;

      return false;
    },

    [currentDate, minDate, maxDate, today]
  );

  const getAvailableMonths = useCallback(() => {
    const year = getYear(currentDate);
    const startM = minDate && getYear(minDate) === year ? getMonth(minDate) : 0;
    const endM = maxDate && getYear(maxDate) === year ? getMonth(maxDate) : 11;

    return MONTHS.filter((m) => m.value >= startM && m.value <= endM);
  }, [currentDate, minDate, maxDate]);

  const getAvailableYears = useCallback((): number[] => {
    const minY = minDate ? getYear(minDate) : getYear(new Date()) - YEAR_RANGE_OFFSET;
    const maxY = maxDate ? getYear(maxDate) : getYear(new Date()) + YEAR_RANGE_OFFSET;

    return Array.from({ length: maxY - minY + 1 }, (_, i) => minY + i);
  }, [minDate, maxDate]);

  const navigateMonth = useCallback(
    (direction: 'next' | 'prev') => {
      setCurrentDate((prevDate) => {
        let newDate = prevDate;

        if (direction === 'next') {
          newDate = addMonths(prevDate, 1);
        } else {
          newDate = subMonths(prevDate, 1);
        }

        return clampDate(newDate, minDate, maxDate);
      });
    },
    [minDate, maxDate]
  );

  const navigation = useMemo<NavigationControls>(
    () => ({
      nextMonth: () => navigateMonth('next'),
      prevMonth: () => navigateMonth('prev'),
    }),
    [navigateMonth]
  );

  const handleMonthChange = useCallback(
    (monthValue: string) => {
      const newMonth = parseInt(monthValue, 10);

      setCurrentDate((prev) => {
        const newDate = new Date(getYear(prev), newMonth, 1);

        return clampDate(newDate, minDate, maxDate);
      });
    },
    [minDate, maxDate]
  );

  const handleYearChange = useCallback(
    (yearValue: string) => {
      const newYear = parseInt(yearValue, 10);
      if (isNaN(newYear)) return;

      setCurrentDate((prev) => {
        const newDate = new Date(newYear, getMonth(prev), 1);

        return clampDate(newDate, minDate, maxDate);
      });
    },
    [minDate, maxDate]
  );

  useEffect(() => {
    if (selectedDate) {
      const selectedMonthStart = startOfMonth(selectedDate);

      if (!isSameMonth(selectedMonthStart, currentDate)) {
        setCurrentDate(clampDate(selectedMonthStart, minDate, maxDate));
      }
    }
  }, [selectedDate, currentDate, minDate, maxDate]);

  const selectDate = useCallback(
    (date: Date) => {
      if (!isDisabled(date)) {
        setSelectedDate(date);
      }
    },
    [isDisabled]
  );

  return {
    open,
    setOpen,
    currentDate,
    ...calendarGrid,
    isDisabled,
    getAvailableMonths,
    getAvailableYears,
    navigation,
    handleMonthChange,
    handleYearChange,
    selectedDate,
    setSelectedDate,
    selectDate,
  };
};
