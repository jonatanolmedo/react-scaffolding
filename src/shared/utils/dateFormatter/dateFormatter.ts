// utils/dateFormatter/dateFormatter.ts
const dateFormatter = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };
  
  export default dateFormatter;
  