separateParser = data => {
  let sepparator = "";
  for (let a = 0; a <= data.length - 1; a++) {
    switch (data[a]) {
      case "-":
        sepparator = "-";
        break;
      case "/":
        sepparator = "/";
        break;
      case " ":
        sepparator = " ";
        break;
    }
  }
  return sepparator;
};

monthLib = m => {
  let month = [
    "jan",
    "feb",
    "mar",
    "apr",
    "mei",
    "jun",
    "jul",
    "aug",
    "sep",
    "okt",
    "nov",
    "des"
  ];
  let stat = false;
  for (let a = 0; a <= month.length - 1; a++) {
    if (month[a] == m) {
      stat = true;
      break;
    }
  }
  return stat;
};

datePredict = data => {
  let getSep = separateParser(data);
  let dateSplit = data.split(getSep);
  let decision = [];
  let res = "BENAR";

  for (let a = 0; a <= dateSplit.length - 1; a++) {
    if (dateSplit[a] <= 12 || monthLib(dateSplit[a])) {
      decision.push("m");
    } else if (dateSplit[a] >= 1000) {
      decision.push("y");
    } else if (dateSplit[a] <= 31) {
      if (!monthLib(dateSplit[a])) {
        decision.push("d");
      }
    }
  }

  for (let b = 0; b <= decision.length - 1; b++) {
    if (decision[b] == decision[b - 1]) {
      res = "TIDAK";
    }
  }

  return res;
};

console.log(datePredict("21 mar 2010"));
console.log(datePredict("04/07/2010"));
console.log(datePredict("1965-3-aug"));

// console.log(monthLib("sep"));
