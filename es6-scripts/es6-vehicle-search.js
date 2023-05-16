// Exercise 3

const vehicles = [
    {
      color: 'Silver',
      type: 'Minivan',
      registrationState: 'CA',
      licenseNo: 'ABC-101',
      registrationExpires: new Date('3-10-2022'),
      capacity: 7
    },
    {
      color: 'Red',
      type: 'Pickup Truck',
      registrationState: 'TX',
      licenseNo: 'A1D-2NC',
      registrationExpires: new Date('8-31-2023'),
      capacity: 3
    },
    {
      color: 'White',
      type: 'Pickup Truck',
      registrationState: 'TX',
      licenseNo: 'A22-X00',
      registrationExpires: new Date('9-31-2023'),
      capacity: 6
    },
    {
      color: 'Red',
      type: 'Car',
      registrationState: 'CA',
      licenseNo: 'ABC-222',
      registrationExpires: new Date('12-10-2023'),
      capacity: 5
    },
    {
      color: 'Black',
      type: 'SUV',
      registrationState: 'CA',
      licenseNo: 'EEE-222',
      registrationExpires: new Date('12-10-2023'),
      capacity: 7
    },
    {
      color: 'Red',
      type: 'SUV',
      registrationState: 'TX',
      licenseNo: 'ZZ2-101',
      registrationExpires: new Date('12-30-2022'),
      capacity: 5
    },
    {
      color: 'White',
      type: 'Pickup Truck',
      registrationState: 'TX',
      licenseNo: 'CAC-7YT',
      registrationExpires: new Date('1-31-2023'),
      capacity: 5
    },
    {
      color: 'White',
      type: 'Pickup Truck',
      registrationState: 'CA',
      licenseNo: '123-ABC',
      registrationExpires: new Date('3-31-2023'),
      capacity: 5
    }
  ];

  const displayVehicle = (car) => console.log(car.licenseNo, car.color, car.type)
  // function that makes it so you can call on it to display each car's info instead of writing it over and over

  console.log('Vechiles that are red:')
  const redVehicles = vehicles.filter((car) => car.color == "Red");
  redVehicles.forEach(displayVehicle)

  console.log(' ');

  console.log('Which cars have expired registration:')
  const expiredRegistration = vehicles.filter((car) => car.registrationExpires < new Date());
  expiredRegistration.forEach(displayVehicle)

  console.log(' ');

  console.log('Vehicles that hold at least 6 people:')
  const holdsAtLeast6 = vehicles.filter((car) => car.capacity >= 6);
  holdsAtLeast6.forEach(displayVehicle)

  console.log(' ');

  console.log('Vehicles whose license plate ends in "222":')
  const endsWith222 = vehicles.filter((car) => car.licenseNo.endsWith('222'));
  endsWith222.forEach(displayVehicle)