import * as React from 'react';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox,
  Button,
} from '@mui/material';
import './calendar.css'; // Import your custom CSS file for styles

dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
  weekStart: 1, // Monday
});

const fullyBookedDates = ['2022-04-15', '2022-04-18'];
const bookedHours = {
  '2024-07-12': [16, 17, 18, 19, 20],
};

const shouldDisableDate = (date) => {
  const today = dayjs();
  const threeYearsFromNow = today.add(3, 'year');
  return (
    date.isBefore(today, 'day') ||
    date.isAfter(threeYearsFromNow, 'day') ||
    date.day() === 0 ||
    date.day() === 6 ||
    fullyBookedDates.includes(date.format('YYYY-MM-DD'))
  );
};

const shouldDisableTime = (value, view, selectedDate) => {
  const currentTime = dayjs();
  const hour = value.hour();
  const minute = value.minute();
  const formattedDate = selectedDate.format('YYYY-MM-DD');

  if (view === 'hours') {
    const isToday = currentTime.isSame(selectedDate, 'day');
    const isBookedHour = bookedHours[formattedDate]?.includes(hour);

    // Disable hours outside the 9-13 and 16-20 intervals
    if ((hour < 9 || hour >= 14) && (hour < 16 || hour >= 21)) {
      return true;
    }

    // If it's today, disable past hours and booked hours
    if (isToday) {
      return hour < currentTime.hour() || (hour === currentTime.hour() && minute < currentTime.minute()) || isBookedHour;
    }

    // Disable booked hours for future dates
    return isBookedHour;
  }

  return false;
};

export default function BasicDateCalendar() {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [allHoursBooked, setAllHoursBooked] = React.useState(false);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate || null);
    checkAllHoursBooked(newDate);
  };

  const checkAllHoursBooked = (date) => {
    if (!date) {
      setAllHoursBooked(false);
      return;
    }

    const formattedDate = date.format('YYYY-MM-DD');
    for (let hour = 16; hour <= 20; hour++) {
      if (!bookedHours[formattedDate]?.includes(hour)) {
        setAllHoursBooked(false);
        return;
      }
    }
    setAllHoursBooked(true);
  };

  const areHoursAvailable = (date) => {
    const currentTime = dayjs();
    const formattedDate = date.format('YYYY-MM-DD');

    // Check if there are any enabled hours for the selected date
    for (let hour = 16; hour <= 20; hour++) {
      const testTime = dayjs(date).hour(hour).startOf('hour');
      if (!shouldDisableTime(testTime, 'hours', date)) {
        return true;
      }
    }

    // If no hours are available for today's date and it's today
    if (currentTime.isSame(date, 'day')) {
      return false;
    }

    // For future dates, consider only booked hours
    return bookedHours[formattedDate]?.length > 0;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div style={{ width: '300px', marginRight: '20px' }}>
            <DateCalendar 
              defaultValue={dayjs()}
              shouldDisableDate={shouldDisableDate} 
              disablePast={true}
              onChange={handleDateChange}
            />
          </div>
          {selectedDate && (
            <div style={{ flex: '1', minWidth: '300px' }}>
              {areHoursAvailable(selectedDate) ? (
                <DigitalClock
                  skipDisabled={true}
                  timeStep={60}
                  shouldDisableTime={(value, view) => shouldDisableTime(value, view, selectedDate)}
                  ampm={false}
                  style={{ width: '100%' }}
                />
              ) : (
                <div style={{ color: '#e91e63', marginTop: '10px' }}>No hours available</div>
              )}
              {allHoursBooked && (
                <div style={{ color: '#e91e63', marginTop: '10px' }}>No hours available</div>
              )}
            </div>
          )}
        </div>
        
        {/* Form Section */}
        <div style={{ marginTop: '20px', width: '100%', maxWidth: '600px', backgroundColor: '#FFE0B5', padding: '20px', borderRadius: '8px' }}>
      <form noValidate autoComplete="off">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Input Fields */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ flex: '1 1 calc(50% - 16px)' }}>
              <TextField label="Nume și prenume" variant="outlined" fullWidth required color='calendar'/>
            </div>
            <div style={{ flex: '1 1 calc(50% - 16px)' }}>
              <TextField label="Email" variant="outlined" fullWidth required color='calendar'/>
            </div>
            <div style={{ flex: '1 1 calc(50% - 16px)' }}>
              <TextField label="Telefon" variant="outlined" fullWidth required color='calendar'/>
            </div>
            <div style={{ flex: '1 1 calc(50% - 16px)' }}>
              <TextField label="Alte cerințe" variant="outlined" fullWidth color='calendar'/>
            </div>
          </div>

          {/* Form Controls Row */}
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '16px' }}>
            {/* Coaching Type */}
            <div style={{ flex: '1 1 calc(25% - 16px)' }}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Tip de serviciu</FormLabel>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Life Coaching" color='calendar'/>
                  <FormControlLabel control={<Checkbox />} label="Mindset Coaching" color='calendar'/>
                  <FormControlLabel control={<Checkbox />} label="Leadership" color='calendar'/>
                </FormGroup>
              </FormControl>
            </div>

            {/* Consultation Type */}
            <div style={{ flex: '1 1 calc(25% - 16px)', color: 'calendar'}}>
              <FormControl component="fieldset" >
                <FormLabel component="legend" color='calendar'>Mod de desfășurare</FormLabel>
                <RadioGroup color='calendar'>
                  <FormControlLabel value="online" control={<Radio />} label="Online" color='calendar'/>
                  <FormControlLabel value="fizic" control={<Radio />} label="Fizic" color='calendar'/>
                </RadioGroup>
              </FormControl>
            </div>

            {/* Client Type */}
            <div style={{ flex: '1 1 calc(25% - 16px)' }}>
              <FormControl component="fieldset" >
                <FormLabel component="legend">Tip de client</FormLabel>
                <RadioGroup >
                  <FormControlLabel value="pf" control={<Radio />} label="Persoană fizică" color='calendar'/>
                  <FormControlLabel value="companie" control={<Radio />} label="Companie" color='calendar' />
                </RadioGroup>
              </FormControl>
            </div>

            
          </div>

          {/* Submit Button */}
          <Button variant="contained" color="calendar" type="submit" fullWidth>
            Submit
          </Button>
        </div>
      </form>
    </div>
      </div>
    </LocalizationProvider>
  );
}
