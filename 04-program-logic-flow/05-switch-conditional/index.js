//* Switch Conditional
let emoji = 'happy face';

//* Switch between cases until emoji is matched
switch (emoji) {
  case 'sad face':
  case 'happy face':
    console.log('yellow');
    break;
  case 'eggplant':
    console.log('purple');
    break;
  default:
    console.log('Invalid');
}

let weekDay = 'Saturday';

//* Switch between cases until weekDay is matched
switch (weekDay) {
  case 'Friday':
  case 'Saturday':
  case 'Sunday':
    console.log('Its The weekend');
    break;
  case 'Monday':
    console.log('I hate Mondays');
    break;
  case 'Tuesday':
    console.log('It Taco Tuesday');
    break;
  case 'Wednesday':
    console.log('Hump Day');
    break;
  case 'Thursday':
    console.log('Not Special');
    break;
  default:
    console.log('Invalid');
}
