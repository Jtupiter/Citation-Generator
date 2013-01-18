function oneAuthorCite(options) {
    // options:
    //  first: first name,
    //  initial: initial,
    //  last: last name,
    //  title: the title,
    //  year: year of publication,
    //  company: company name,
    //  city: publishing city,
    //  state: publishing state
    // Example of use:
    //   var html = oneAuthorCite({
    //      first: 'Jordan',
    //      last: 'Upiter',
    //      title: 'Jordan and the Moon',
    //      year: 1994,
    //      company: Jupiter Inc,
    //      city: Toronto,
    //      state: Ontario
    //   });
    if (options.first != ""){
        if (options.last != ""){
            options.first = options.first.substring(0,1).toUpperCase() + ". ";
        }
    }
    if (options.initial != ""){
        options.initial = options.initial.substring(0,1).toUpperCase() + ". ";
    }
    if (options.last != ""){
        options.last = options.last.charAt(0).toUpperCase() +
            options.last.substring(1).toLowerCase();
        if (options.first == ""){
             options.last += ", ";
        }
        else {
            options.last += ". ";
        }
    }
    var name = options.last + options.first + options.initial;
    if (name == ""){
        if (options.company != ""){
            name = options.company;
        }
        else{
            name = options.title;
        }

    }
    if (options.year != ""){
        options.year = "(" + options.year + "). ";
    }
    else {
        options.year = "(n.d). ";
    }
    if (options.title != ""){
        options.title += ". "
    }
    if (options.city != "" ){
        if (options.state != ""){
            options.city += ", ";
        }
        else{
            options.city +=": ";
        }
    }
    if (options.state != ""){
        options.state += ": ";
    }
    if (options.company != ""){
        options.company += ".";
    }
    return name + options.year + options.title.italics() + options.city + options.state + options.company;
        
}

function createReference(){
    var reference = oneAuthorCite({
        first: O('firstName').value,
        initial: O('initial').value,
        last: O('lastName').value,
        title: O('title').value,
        year: O('pubYear').value,
        company: O('pubComp').value,
        city:  O('pubCity').value,
        state: O('pubState').value,
    });

function O(obj){
    return document.getElementById(obj);
}
function S(obj){
    return O(obj).style;
}