console.group('First part');
console.error('Warning Error!');
console.warn('!!!!!!!!!!!!!');
console.info('Hello world!🙂123');
console.groupEnd();
let human = {
    one : {
        name: 'Vasya',
        age: 22,
        lastName: 'Parfenov'
    },
    two : {
        name: 'Kolya',
        age: 18,
        lastName: 'Parfenov'
    }
}
console.group('Second part')
console.table(human);
console.time('time till click');
alert('Click to continue');
console.timeEnd('time till click');
console.groupEnd();
