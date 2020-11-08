class Event {
    constructor(type, subtype, affectedNations, description) {
        this.type = type;
        this.subtype = subtype;
        this.affectedNations = affectedNations;
        this.description = description;
    }

}

let getRandomEvent = ((numberOfNations) => {
    let type = randomType;
    console.los(type);
    let subtype = randomSubtype(type);
    let affectedNations = details(type, numberOfNations)[1];
    let description = description(subtype, numberOfNations)[0];
    console.log(`Type: ${type} Subtype: ${subtype} Nations: ${affectedNations} Descr: ${description} `)
    return new Event(type, subtype, affectedNations, description);
});

let addEvent = ((numberOfNations) => {
    let event = getRandomEvent;
    var p = document.createElement("P");
    var t = document.createTextNode(event.description);
    p.appendChild(t);
    document.getElementsByClassName("container")[0].appendChild(p);
});

let randomType = (() => {
    let types = ["Inner Politics", "Outer Politics", "Science", "Culture", "Economy", "Disaster"];
    return types[randomInt(0, types.length)];
});

let randomSubtype = ((type) => {
    switch (type) {
        case "Inner Politics": {
            let subtypes = ["Tax Increase", "Tax Decrease", "Protests", "Forum with citizens", "Civil War"];
            return subtypes[randomInt(0, types.length)];
            break;
        }
        case "Outer Politics": {
            let subtypes = ["Peace Treaty", "Border Treaty", "Trade Treaty", "Science and Research Treaty", "War"];
            return subtypes[randomInt(0, types.length)];
            break;
        }
        case "Science": {
            let subtypes = ["Discovery of X", "Scientific Competition"];
            return subtypes[randomInt(0, types.length)];
            break;
        }
        case "Culture": {
            let subtypes = ["Artist releases art", "Dance Festival", "Music Festival", "Art Exhibition", "Comedy Festival", "Sports Festival", "Wedding", "Religious Event"];
            return subtypes[randomInt(0, types.length)];
            break;
        }
        case "Economy": {
            let subtypes = ["New company founded", "Boom", "Crisis", "Resource / Product bottleneck"];
            return subtypes[randomInt(0, types.length)];
            break;
        }
        case "Disaster": {
            let subtypes = ["Pandemic", "Storm", "Drought", "Volcano eruption", "Earthquake", "Flood", "Heat / Cold wave", "Impact event", "Tsunami", "Wildfire"];
            return subtypes[randomInt(0, types.length)];
            break;
        }
    }
});

//returns a random integer between min (included) and max (excluded)
let randomInt = ((min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
});

let details = ((subtype, numberOfNations) => {
    let descr = "";
    let nations = 1;
    switch (subtype) {
        case "Tax Increase": {
            descr = "";
            break;
        }
        case "Tax Decrease": {
            descr = "";
            break;
        }
        case "Protests": {
            descr = "";
            break;
        }
        case "Forum with citizens": {
            descr = "";
            break;
        }
        case "Civil War": {
            descr = "";
            break;
        }
        case "Peace Treaty": {
            descr = "";
            nations = randomInt(2,numberOfNations+1);
            break;
        }
        case "Border Treaty": {
            descr = "";
            nations = randomInt(2, numberOfNations + 1);
            break;
        }
        case "Trade Treaty": {
            descr = "";
            nations = randomInt(2, numberOfNations + 1);
            break;
        }
        case "Research Treaty": {
            descr = "";
            nations = randomInt(2, numberOfNations + 1);
            break;
        }
        case "War": {
            descr = "";
            nations = randomInt(2, numberOfNations + 1);
            break;
        }
        case "Discovery of Something": {
            descr = "";
            break;
        }
        case "Scientific Competition": {
            descr = "";
            break;
        }
        case "Art Event": {
            descr = "";
            break;
        }
        case "State Fair": {
            descr = "";
            break;
        }
        case "Sports Event": {
            descr = "";
            break;
        }
        case "Social Event": {
            descr = "";
            break;
        }
        case "Scientific Event": {
            descr = "";
            break;
        }
        case "Religious Event": {
            descr = "";
            break;
        }
        case "New Company Founded": {
            descr = "";
            break;
        }
        case "Boom": {
            descr = "";
            nations = randomInt(1,numberOfNations+1);
            break;
        }
        case "Crisis": {
            descr = "";
            nations = randomInt(1, numberOfNations + 1);
            break;
        }
        case "Pandemic": {
            descr = "";
            nations = numberOfNations;
            break;
        }
        case "Storm": {
            descr = "";
            nations = randomInt(1, numberOfNations + 1);
            break;
        }
        case "Drought": {
            descr = "";
            nations = randomInt(1, numberOfNations + 1);
            break;
        }
        case "Volcanic Activity": {
            descr = "";
            nations = randomInt(1, numberOfNations + 1);
            break;
        }
        case "Earthquake": {
            descr = "";
            nations = randomInt(1, numberOfNations + 1);
            break;
        }
        case "Flood": {
            descr = "";
            nations = randomInt(1, numberOfNations + 1);
            break;
        }
        case "Heat Wave": {
            descr = "";
            nations = randomInt(1, numberOfNations + 1);
            break;
        }
        case "Cold Wave": {
            descr = "";
            nations = randomInt(1, numberOfNations + 1);
            break;
        }
        case "Impact Event": {
            descr = "";
            nations = randomInt(1, numberOfNations + 1);
            break;
        }
        case "Tsunami": {
            descr = "";
            nations = randomInt(1, numberOfNations + 1);
            break;
        }
        case "Wildfire": {
            descr = "";
            nations = randomInt(1, numberOfNations + 1);
            break;
        }
        default: {
            descr = "Default";
            nations = randomInt(1, numberOfNations + 1);
            break;
        }
    }
    return [descr, nations];
});

document.getElementById('eventButton').addEventListener('click', addEvent(3));