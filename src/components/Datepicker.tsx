import { useState } from 'react';
import { Controller, Control, FieldValues, FieldPath } from 'react-hook-form';
import {
  format,
  setMonth,
  setYear,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
} from 'date-fns';
import { CalendarIcon } from '@radix-ui/react-icons';
import './DatePicker.css';

const WEEKDAYS: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface DatePickerProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
  required?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

interface Month {
  value: number;
  label: string;
}

export function DatePicker<T extends FieldValues>({
  name,
  control,
  label,
  placeholder = 'Select date',
  required = false,
}: DatePickerProps<T>) {
  const [open, setOpen] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  // Generate month options
  const months: Month[] = Array.from({ length: 12 }, (_, i) => ({
    value: i,
    label: format(new Date(0, i), 'MMMM'),
  }));

  // Generate year options (10 years range)
  const currentYear: number = new Date().getFullYear();
  const years: number[] = Array.from({ length: 10 }, (_, i) => currentYear + i - 5);

  // Generate calendar days for current month
  const monthStart: Date = startOfMonth(currentDate);
  const monthEnd: Date = endOfMonth(monthStart);
  const days: Date[] = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Pad calendar with empty days for proper alignment
  const startDay: number = monthStart.getDay();
  const endDay: number = 6 - monthEnd.getDay();
  const paddedDays: (Date | null)[] = [
    ...(Array(startDay).fill(null) as (Date | null)[]),
    ...days,
    ...(Array(endDay).fill(null) as (Date | null)[]),
  ];

  const handleMonthChange = (monthIndex: number): void => {
    setCurrentDate(setMonth(currentDate, monthIndex));
  };

  const handleYearChange = (year: number): void => {
    setCurrentDate(setYear(currentDate, year));
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field }) => {
        const handleDayClick = (day: Date) => {
          if (isSameMonth(day, currentDate)) {
            field.onChange(day);
            setOpen(false);
          }
        };

        return (
          <div className="date-picker-container">
            {label && (
              <label className="date-picker-label">
                {label}
                {required && <span className="date-picker-required">*</span>}
              </label>
            )}
            <div className="date-picker-wrapper">
              <button
                className="date-picker-trigger"
                onClick={() => setOpen(!open)}
                aria-label={
                  field.value ? `Selected date: ${format(field.value, 'PPP')}` : placeholder
                }
              >
                <CalendarIcon className="date-picker-icon" />
                {field.value ? format(field.value, 'PPP') : placeholder}
              </button>

              {open && (
                <div className="date-picker-dropdown">
                  <div className="date-picker-header">
                    <select
                      className="date-picker-select"
                      value={currentDate.getMonth()}
                      onChange={(e) => handleMonthChange(parseInt(e.target.value))}
                    >
                      {months.map((month) => (
                        <option key={month.value} value={month.value}>
                          {month.label}
                        </option>
                      ))}
                    </select>
                    <select
                      className="date-picker-select"
                      value={currentDate.getFullYear()}
                      onChange={(e) => handleYearChange(parseInt(e.target.value))}
                    >
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="date-picker-weekdays">
                    {WEEKDAYS.map((day) => (
                      <div key={day} className="date-picker-weekday">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="date-picker-days">
                    {paddedDays.map((day, index) => (
                      <button
                        key={day ? day.toISOString() : `empty-${index}`}
                        className={`date-picker-day ${
                          day && field.value && isSameDay(day, field.value) ? 'selected' : ''
                        } ${!day || !isSameMonth(day, currentDate) ? 'other-month' : ''}`}
                        disabled={!day || !isSameMonth(day, currentDate)}
                        onClick={() => day && handleDayClick(day)}
                      >
                        {day ? format(day, 'd') : ''}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      }}
    />
  );
}
