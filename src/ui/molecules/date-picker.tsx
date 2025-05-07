import { Controller, Control, FieldValues, FieldPath } from 'react-hook-form';
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { Select } from '@radix-ui/themes';
import { format, isSameDay, isSameMonth } from 'date-fns';
import { useDatePicker } from '@/hooks/use-date-picker';
import { Button } from '../atoms/Button';
import { InputIcon } from './input-icon';
import styles from './date-picker.module.css';

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

interface DatePickerProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
  required?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

export function DatePicker<T extends FieldValues>({
  name,
  control,
  label,
  placeholder = 'Select date',
  required = false,
  minDate,
  maxDate,
}: DatePickerProps<T>) {
  const {
    open,
    setOpen,
    currentDate,
    paddedDays,
    isDisabled,
    getAvailableMonths,
    getAvailableYears,
    navigation,
    handleMonthChange,
    handleYearChange,
  } = useDatePicker({ minDate, maxDate });
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field }) => {
        const handleDayClick = (day: Date) => {
          if (isSameMonth(day, currentDate) && !isDisabled(day)) {
            field.onChange(day);
            setOpen(false);
          }
        };

        return (
          <div className={styles['date-picker-container']}>
            {label && (
              <div className={styles['date-picker-label']} id="datePicker">
                {label}
                {required && <span className={styles['date-picker-required']}>*</span>}
              </div>
            )}

            <div className={styles['date-picker-wrapper']}>
              <InputIcon
                readOnly
                id="datePicker"
                value={field.value ? format(field.value, 'MM/dd/yyyy') : ''}
                rightIcon={
                  <CalendarIcon
                    className={styles['date-picker-icon']}
                    onClick={() => setOpen(!open)}
                    aria-label={
                      field.value
                        ? `Selected date: ${format(field.value, 'MM/dd/yyyy')}`
                        : placeholder
                    }
                  />
                }
              />

              {open && (
                <div className={styles['date-picker-dropdown']}>
                  <div className={styles['date-picker-header']}>
                    <div className={styles['date-picker-navigation']}>
                      <Button
                        variant="ghost"
                        className={styles['date-picker-nav-button']}
                        onClick={navigation.prevMonth}
                        aria-label="Previous month"
                      >
                        <ChevronLeftIcon />
                      </Button>

                      <div className={styles['date-picker-month-year']}>
                        <Select.Root
                          value={`${currentDate.getMonth()}`}
                          onValueChange={handleMonthChange}
                        >
                          <Select.Trigger radius="large" />
                          <Select.Content>
                            {getAvailableMonths().map((month) => (
                              <Select.Item key={month.value} value={`${month.value}`}>
                                {month.label}
                              </Select.Item>
                            ))}
                          </Select.Content>
                        </Select.Root>

                        <Select.Root
                          value={`${currentDate.getFullYear()}`}
                          onValueChange={handleYearChange}
                        >
                          <Select.Trigger radius="large" />
                          <Select.Content>
                            {getAvailableYears().map((year) => (
                              <Select.Item key={year} value={`${year}`}>
                                {year}
                              </Select.Item>
                            ))}
                          </Select.Content>
                        </Select.Root>
                      </div>

                      <Button
                        variant="ghost"
                        className={styles['date-picker-nav-button']}
                        onClick={navigation.nextMonth}
                        aria-label="Next month"
                      >
                        <ChevronRightIcon />
                      </Button>
                    </div>
                  </div>

                  <div className={styles['date-picker-weekdays']}>
                    {WEEKDAYS.map((day, index) => (
                      <div key={`${day}-${index}`} className={styles['date-picker-weekday']}>
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className={styles['date-picker-days']}>
                    {paddedDays.map((day, index) => {
                      const isSelected = day && field.value && isSameDay(day, field.value);
                      const disabled = !day || isDisabled(day);

                      return (
                        <Button
                          variant="ghost"
                          key={day ? day.toISOString() : `empty-${index}`}
                          className={`${styles['date-picker-day']} ${
                            isSelected ? styles.selected : ''
                          } ${disabled ? styles.disabled : ''}`}
                          disabled={disabled}
                          onClick={() => day && handleDayClick(day)}
                        >
                          {day ? format(day, 'd') : ''}
                        </Button>
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
