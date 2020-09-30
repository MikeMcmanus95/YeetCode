/*
Input:
——
events = [
{'name': 'Halloween', 'date': “2020-10-31”},
   {'name': 'Diwali', 'date': “2020-11-14”},
   {'name': "Indigenous Peoples' Day", 'date': “2020-10-11”},
   {'name': 'Veterans Day', 'date': “2020-11-11”},
]

Output:
———-
Run function today => {“Coming Soon”: “Indigenous Peoples’ Day is 12 days away”, “Up Next”:[“Halloween”, “Veterans Day”, “Diwali”]}
Run function on Oct 31, 2020 =>  {“Coming Soon”: “Halloween is today”, “Up Next”:[“Veterans Day”, “Diwali”]}
Run function on Nov 13, 2020 => {“Coming Soon”: “Diwali”, “Up Next”:[ ]}

If all the events are in the past, the function should return
{“Coming Soon”: null, “Up Next”:[ ]}

*/
function days_away_upcoming(events) {
  let currentDate = date.today();
  let resultObj = {"Coming Soon": null, "Up Next": []};

  let soonestEvent = days_away_soonest(events, currentDate, true);
  resultObj["Coming Soon"] = days_away(soonestEvent, false);
  while (soonestEvent !== null) {
    currentDate = date.parse(soonestEvent.date);
    soonestEvent = days_away_soonest(events, currentDate, true);
    if (soonestEvent === null) break;
    resultObj["Up Next"].push(soonestEvent.name);
  }

  return resultObj;
}

function days_away_soonest(events, currentDate, isEventObj = false) {
  //                      diff      event
  const soonestEvent = [Infinity, null];

  for (let event of events) {
    let currentDiff = days_away(event, true, currentDate);
    if (currentDiff === 0) {
      soonestEvent[0] = currentDiff;
      soonestEvent[1] = event;
      break;
    } else if (currentDiff && currentDiff < soonestEvent[0]) {
      soonestEvent[0] = currentDiff;
      soonestEvent[1] = event;
    }
  }

  if (soonestEvent[1]) {
    return isEventObj ? soonestEvent[1] : days_away(soonestEvent[1], false);
  } else {
    return null;
  }
}

let events = [
{"name": "Halloween", "date": "2020-10-31"},
   {"name": "Diwali", "date": "2020-11-14"},
   {"name": "Indigenous Peoples' Day", 'date': "2020-10-11"},
   {"name": "Veterans Day", "date": "2020-11-11"},
]

//Date Handling Helper functions
let date = {}

//To parse a date string “YYYY-MM-DD” into a date object
date.parse = (str) => Date.parse(str)

// To get today’s date as date object
date.today = () => Date.parse("2020-10-31")

//To get number of days between two dates by subtracting date2 from date1.
//The result can be +ve or -ve integer or zero
date.number_of_days_between = (date1, date2) => (date1.valueOf()-date2.valueOf())/(24*3600000)



let event = {"name": "Halloween", "date":"2020-10-31"}

function days_away(event, isDifference, currentDate = date.today()){
  let eventDate = date.parse(event.date);
  let difference = date.number_of_days_between(eventDate, currentDate);
  let resultStr = '';

  if (difference === 0) {
    resultStr = `${event.name} is today`;
  } else if (difference === 1) {
    resultStr = `${event.name} is 1 day away`;
  } else if (difference > 1) {
    resultStr = `${event.name} is ${difference} days away`;
  } else {
    return null;
  }

  return isDifference ? difference : resultStr;
}

// console.log(days_away(event));
// console.log(days_away_soonest(events)); // “Indigenous Peoples’ Day is 13 days away”
console.log(days_away_upcoming(events));

//“Coming Soon”: “Indigenous Peoples’ Day is 12 days away”, “Up Next”:[“Halloween”, “Veterans Day”, “Diwali”]}
