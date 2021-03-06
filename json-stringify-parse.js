//24-4 :: JSON ,JSON structure parse stringify , JSON property -->

const user = {
    id:2131,
    name:"fahim",

    lover:{
        name: "jamila",
        favFood: "pizza",
    },
    friendsAge:[12, 33, 44],
    friends:["kamal", "jamal", "samal"]       
};
const userJSON = JSON.stringify(user);
// console.log(userJSON);              // object ke json string a convert kora jai.

// output::
// {"id":2131,"name":"fahim","lover":{"name":"jamila","favFood":"pizza"},"friendsAge":[12,33,44],"friends":["kamal","jamal","samal"]}
// {

const userFormJSON = JSON.parse(userJSON);
console.log(userFormJSON);               json.stringfy ke json.parse diye abar object kora jai.
// output::
// {
//   id: 2131,
//   name: 'fahim',
//   lover: { name: 'jamila', favFood: 'pizza' },
//   friendsAge: [ 12, 33, 44 ],
//   friends: [ 'kamal', 'jamal', 'samal' ]
// }
