// src/components/TimeRangeSelect.tsx
import React from 'react';

interface TimeRangeSelectProps {
  onChange: (selectedTime: string) => void;
  defaultValue?: string; // Optional default selected time
}

const TimeRangeSelect: React.FC<TimeRangeSelectProps> = ({
  onChange,
  defaultValue,
}) => {
  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutes = ['00', '30'];

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select
      className="border rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
      onChange={handleTimeChange}
      defaultValue={defaultValue}
    >
      {hours.map((hour) =>
        minutes.map((minute) => (
          <option key={`<span class="math-inline">\{hour\}\-</span>{minute}`} value={`<span class="math-inline">\{hour\}\:</span>{minute}`}>
            {`<span class="math-inline">\{hour\}\:</span>{minute} - <span class="math-inline">\{hour \=\=\= '23' ? '00' \: Number\(hour\) \+ 1\}\:</span>{minute}`}
          </option>
        ))
      )}
    </select>
  );
};

export default TimeRangeSelect;
