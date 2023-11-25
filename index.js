// code your solution here
function saturdayFun(activity) {
    let saturdayActivity;
  
    if (activity) {
      saturdayActivity = activity;
    } else {
      saturdayActivity = "roller-skate";
    }
  
    return `This Saturday, I want to ${saturdayActivity}!`;
  }
  const mondayWork = function(activity) {
    if (activity) {
      return `This Monday, I will ${activity}.`;
    } else {
      return "This Monday, I will go to the office.";
    }
  };
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }