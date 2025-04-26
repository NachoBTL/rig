import { useState } from 'react';
import { Controller, Control, FieldValues, FieldPath } from 'react-hook-form';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
  isBefore,
  startOfDay,
} from 'date-fns';
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import './DatepickerDesign.css';

const WEEKDAYS: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

interface DatePickerProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
  required?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

export function DatePickerDesign<T extends FieldValues>({
  name,
  control,
  label,
  placeholder = 'Select date',
  required = false,
}: DatePickerProps<T>) {
  const [open, setOpen] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const today: Date = startOfDay(new Date());

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

  const handlePrevMonth = (): void => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = (): void => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field }) => {
        const handleDayClick = (day: Date) => {
          if (isSameMonth(day, currentDate) && !isBefore(day, today)) {
            field.onChange(day);
            setOpen(false);
          }
        };

        const isDayDisabled = (day: Date | null) => {
          if (!day) return true;
          return !isSameMonth(day, currentDate) || isBefore(day, today);
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
                    <div className="date-picker-navigation">
                      <button
                        className="date-picker-nav-button"
                        onClick={handlePrevMonth}
                        aria-label="Previous month"
                      >
                        <ChevronLeftIcon />
                      </button>
                      <div className="date-picker-month-year">
                        {format(currentDate, 'MMMM yyyy')}
                      </div>
                      <button
                        className="date-picker-nav-button"
                        onClick={handleNextMonth}
                        aria-label="Next month"
                      >
                        <ChevronRightIcon />
                      </button>
                    </div>
                  </div>

                  <div className="date-picker-weekdays">
                    {WEEKDAYS.map((day, index) => (
                      <div key={`${day}-${index}`} className="date-picker-weekday">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="date-picker-days">
                    {paddedDays.map((day, index) => {
                      const disabled = isDayDisabled(day);
                      return (
                        <button
                          key={day ? day.toISOString() : `empty-${index}`}
                          className={`date-picker-day ${
                            day && field.value && isSameDay(day, field.value) ? 'selected' : ''
                          } ${disabled ? 'disabled' : ''}`}
                          disabled={disabled}
                          onClick={() => day && handleDayClick(day)}
                        >
                          {day ? format(day, 'd') : ''}
                        </button>
                      );
                    })}
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
