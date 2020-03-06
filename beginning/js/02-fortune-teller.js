// Why pay a fortune teller when you can just program your fortune yourself? Write a function named tellFortune() that:
// Takes 4 arguments: number of children, partner's name, geographic location, job title.
// Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(children, lover, location, job) {
    return window.console.log("You will be a " + job + " in " + location + ", and married to " + lover + " with " + children + " kid(s).");
}

tellFortune(5, "Demitri", "Greece", "designer");
tellFortune(1, "Pili", "Samoa", "faifa'ato'aga");
tellFortune(0, "Romero Blue", "Rio De Janeiro", "physician");
