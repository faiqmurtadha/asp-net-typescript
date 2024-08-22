var TSButton = function () {
    var newUser = new Person("Muhammad", "Faiq", "Al Murtadha");
    var greeting = greeter(newUser);
    var element = document.getElementById("ts-example");
    if (element) {
        element.innerHTML = greeting;
    }
};
var Person = /** @class */ (function () {
    function Person(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Person;
}());
var greeter = function (user) {
    return "Hello, " + user.firstName + " " + user.lastName;
};
//# sourceMappingURL=app.js.map