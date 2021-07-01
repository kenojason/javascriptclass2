var users = [
    {name: 'john', age: 50},
    {name: 'mary', age: 30}
];
for (let i = 0; i < users.length; i++ ) {
     console.log(users[i].age);
     console.log(users[i].age)           
};

users.map(function (val){
    console.log(val.name);
    console.log(val.age)
})

users.map(function (val) {
    console.log(val.name);
    console.log(val.name);
}
)

for (var x=0; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}
