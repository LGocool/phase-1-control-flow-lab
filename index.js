function scuberGreetingForFeet(feet){
  if (feet <= 400){
    return `This one is on me!`;
  }
  else if (feet >= 400 && feet <= 2000){
    return 'That will be twenty bucks.';
  }
  else if (feet >= 2000 && feet <=2500){
    return 'I will gladly take your thirty bucks.';
  }
  else {
    return `No can do.`;
  }
}

function ternaryCheckCity(city){
  const nameMessage = (city ==="NYC") ? "Ok, sounds good.": "No go.";
  return nameMessage;

}


function switchOnCharmFromTip(tip){
    let tipMessage;
    switch(tip) {
      case 'generous':
        tipMessage = "Thank you so much.";
        break;
      case 'not as generous':
        tipMessage = "Thank you.";
        break;
      default:
        return ("Bye.");
        break;
    }
     return tipMessage;
}

