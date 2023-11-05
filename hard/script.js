
function PII(name, ssn) {
    const patient1 = {
        name: "John",
        ssn: "123-45-6789",
    };

    function getName() {
        return patient1.name
    }

    function getSSN() {
        return patient1.ssn
    }

    return {
        getName: getName,
        getSSN: getSSN,
    };

}

const patient1Data = PII("John", "123-45-6789");

// output: undefined
// console.log(patient2Data.name);
// output: undefined
// console.log(patient1Data.ssn);
// output: John
// console.log(patient1Data.getName())
// output: 123-45-6789
// console.log(patient1Data.getSSN())


