// Exercise 2

const academyMembers = [
    {
      memID: 101,
      name: 'Bob Brown',
      films: ['Bob I', 'Bob II', 'Bob III', 'Bob IV']
    },
    {
      memID: 142,
      name: 'Sallie Smith',
      films: ['A Good Day', 'A Better Day']
    },
    {
      memID: 187,
      name: 'Fred Flanders',
      films: ['Who is Fred?', 'Where is Fred?', 'What is Fred?', 'Why Fred?']
    },
    {
      memID: 203,
      name: 'Bobbie Boots',
      films: ['Walking Boots', 'Hiking Boots', 'Cowboy Boots']
    }
  ];

  const academyMemId = academyMembers.find((actor) => actor.memID == 187)
  console.log('Actor with member ID 187:', academyMemId.name)
  
  console.log(' ');

  const atLeast3Films = academyMembers.filter((actor) => actor.films.length >= 3)
  console.log('These actors have been in atleast 3 films:')
  atLeast3Films.forEach((actor) => {
    console.log(actor.name)
  })
  
  console.log(' ');

  console.log('Actors whose name starts with "Bob":')
  const namesWithBob = academyMembers.filter((actor) => actor.name.startsWith('Bob'));
  namesWithBob.forEach((actor) => {
    console.log(actor.name)
  })
  
  console.log(' ');

  console.log('Actor(s) who have been in a film that starts with "A":')
  
  const filmsWithA = (filmTitles) => filmTitles.startsWith('A');
  const filmTitlesWithA = (films) => films.find(filmsWithA);

  const actorInFilmsWithA = academyMembers.filter(member => filmTitlesWithA(member.films))
  actorInFilmsWithA.forEach((actor) => console.log(actor.name))
  