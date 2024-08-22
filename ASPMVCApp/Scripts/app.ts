const TSButton = (): void => {
    const newUser = new Person("Muhammad", "Faiq", "Al Murtadha");
    const greeting = greeter(newUser);

    const element = document.getElementById("ts-example");
    if (element) {
        element.innerHTML = greeting;
    }
}

class Person {
    fullName: string;

    constructor(
        public firstName: string,
        public middleName: string,
        public lastName: string
    ) {
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
}

const greeter = (user: { firstName: string; lastName: string }): string => {
    return "Hello, " + user.firstName + " " + user.lastName;
};