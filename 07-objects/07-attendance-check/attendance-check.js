let classRoom = [
  {
    Marnie: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true },
    ],
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false },
    ],
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true },
    ],
  },
];

// YOUR CODE BELOW

// classCheck('Monday'); // => ['Marnie', 'Shoshanna']

// classCheck('Wednesday'); // => ['Marnie', 'Lena']

const attendanceCheck = (day) => {
  const studentsPresent = [];

  for (let i = 0; i < classRoom.length; i++) {
    let currentStudent = classRoom[i];
    for (let name in currentStudent) {
      let daysOfTheWeek = currentStudent[name];
      for (let j = 0; j < daysOfTheWeek.length; j++) {
        if (daysOfTheWeek[j][day]) {
          studentsPresent.push(name);
        }
      }
    }
  }

  return studentsPresent;
};
