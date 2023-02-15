const users = [
    {username:'ppc90', age:38, premium: false},
    {username:'apm90', age:56, premium: true},
    {username:'maria98', age:21, premium: false},
    {username:'marco084', age:87, premium: true},
    {username:'ppc90', age:26, premium: false},
]
//*este .map recorre el array//*
users.map(function(user){
    console.log(' El usuario '  +  user.username  +  ' tiene '  +  user.age  +  ' años ');
});

 const noPremium = users.filter(function(usuario){
    return usuario.premium==false
 });
console.log('noPremium',noPremium);


