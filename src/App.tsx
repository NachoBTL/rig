import { useForm } from 'react-hook-form';
import { Button, Theme } from '@radix-ui/themes';
import { DatePicker } from './components/Datepicker';
import { DatePickerDesign } from './components/DatePickerDesign';
import '@radix-ui/themes/styles.css';

interface FormValues {
  birthDate: Date;
  appointmentDate: Date;
}

function App() {
  const { handleSubmit, control } = useForm<FormValues>();

  const onSubmit = (data: FormValues): void => {
    console.log('Form submitted with:', data);
  };

  return (
    <Theme>
      <form onSubmit={(e) => void handleSubmit(onSubmit)(e)} className="max-w-md space-y-4">
        <DatePicker
          name="birthDate"
          control={control}
          label="Birth Date"
          placeholder="MM/DD/YYYY"
          required
        />

        <DatePickerDesign
          name="birthDate"
          control={control}
          label="Birth Date"
          placeholder="MM/DD/YYYY"
          required
        />
        <Button type="submit">Submit</Button>
      </form>
    </Theme>
  );
}

export default App;
