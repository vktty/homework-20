// 1
const userObj = {
    firstName: "Kit",
    lastName: "Buns",
    age: 24,
};

console.log(userObj);

// 2
userObj.fullName = function () {
    return `${userObj.firstName} ${userObj.lastName}`
};
console.log(userObj.fullName());

// 3
function defUpperStr(text) {
    const lowerCaseText = text || "Default Text"
    return lowerCaseText.toUpperCase()
};

console.log(defUpperStr('My text!'));
console.log(defUpperStr());

// 4
function evenFn(n) {
    let array = [];
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0 && i !== 0) {
            array.push(i);
        }
    }
    return array;
}

console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

// 5
function weekFn(n) {
    switch (n) {
        case 1:
            return 'Понеділок';
        case 2:
            return 'Вівторок';
        case 3:
            return 'Середа';
        case 4:
            return 'Четвер';
        case 5:
            return `П'ятниця`;
        case 6:
            return 'Субота';
        case 7:
            return 'Неділя';
        default:
            return null
    }
}

console.log(weekFn(1));
console.log(weekFn(3));
console.log(weekFn(7));
console.log(weekFn(9));
console.log(weekFn(1.5));
console.log(weekFn('2'));

// 6 
function ageClassification(n) {
    let group
    group = (n <= 0) ? null
        : (n <= 24) ? 'Дитинство'
            : (n <= 44) ? 'Молодість'
                : (n <= 65) ? 'Зрілість'
                    : (n <= 75) ? 'Старість'
                        : (n <= 90) ? 'Довголіття'
                            : (n <= 122) ? 'Рекорд'
                                : null;

    return group;
}

console.log('    -1 :', ageClassification(-1))
console.log('     0 :', ageClassification(0))
console.log('     1 :', ageClassification(1))
console.log('    24 :', ageClassification(24))
console.log(' 24.01 :', ageClassification(24.01))
console.log('    44 :', ageClassification(44))
console.log(' 44.01 :', ageClassification(44.01))
console.log('    65 :', ageClassification(65))
console.log('  65.1 :', ageClassification(65.1))
console.log('    75 :', ageClassification(75))
console.log(' 75.01 :', ageClassification(75.01))
console.log('    90 :', ageClassification(90))
console.log(' 90.01 :', ageClassification(90.01))
console.log('   122 :', ageClassification(122))
console.log('122.01 :', ageClassification(122.01))
console.log('   150 :', ageClassification(150))


console.log('    -1 :', ageClassification(-1) === null);
console.log('     0 :', ageClassification(0) === null);
console.log('     1 :', ageClassification(1) === 'Дитинство');
console.log('    24 :', ageClassification(24) === 'Дитинство');
console.log(' 24.01 :', ageClassification(24.01) === 'Молодість');
console.log('    44 :', ageClassification(44) === 'Молодість');
console.log(' 44.01 :', ageClassification(44.01) === 'Зрілість');
console.log('    65 :', ageClassification(65) === 'Зрілість');
console.log('  65.1 :', ageClassification(65.1) === 'Старість');
console.log('    75 :', ageClassification(75) === 'Старість');
console.log(' 75.01 :', ageClassification(75.01) === 'Довголіття');
console.log('    90 :', ageClassification(90) === 'Довголіття');
console.log(' 90.01 :', ageClassification(90.01) === 'Рекорд');
console.log('   122 :', ageClassification(122) === 'Рекорд');
console.log('122.01 :', ageClassification(122.01) === null);
console.log('   150 :', ageClassification(150) === null);


// 7
function oddFn(n) {
    let array = [];
    let i = 0;
    while (i < n) {
        if (i % 2 !== 0 && i !== 0) {
            array.push(i);
        }
        i++;
    }
    return array;
}

console.log(oddFn(10));
console.log(oddFn(15));
console.log(oddFn(20));

// 8
function mainFunc(a, b, cb) {
    if (typeof cb !== 'function') {
        return false;
    }
    return cb(a, b);
}

function cbRandom(min, max) {
    return Math.floor(min + Math.random() * (max - min))
}
function cbPow(num, pow) {
    return Math.pow(num, pow);
}
function cbAdd(a, b) {
    return a + b;
}

console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(2, 5, 'not a func'));