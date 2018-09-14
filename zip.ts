interface LuisOptions {
    kind: 'Luis';
    appId: string;
}
interface FooOptions {
    kind: 'Foobar';
    fooId: number;
}
type Options = LuisOptions | FooOptions;
type SuperOptions = Options | string;


function p (s:SuperOptions): void {
    switch( (s as Options).kind) {
        case 'Luis':
            ;
        case 'Luis':
            ;
    }
}

p('foo');

p({kind:'Luis', appId: '12345'});
p({kind:'Foobar', fooId: 42});

p('foobar')


// const optionsFoo: Options = {
//     appId:'1234'
// }

// const isFish = (animal: Animal): animal is Fish => (<Fish>animal).fin !== undefined
// if (isFish(myAnimal)) {
//     console.log(myAnimal.fin);
// } else {
//     console.log(myAnimal.legs.number);
// };

