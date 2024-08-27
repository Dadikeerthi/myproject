//there are advanced data types-
//set- set is used to store or manipulate unique values
let s=new Set();
console.log(s);
s.add(3);
s.add(4);
s.add(4);
console.log(s);
//add- is used to add values
//delete- is used to del th values
//clear- is used to clear whole set
//has- will check whether the element existed or not
//map- is used to take values whose key values are unique.
let m =new Map();
m.set('name','keerthy');
console.log(m.get('name'));

//date-which gives current date and time
let dt=new Date()
console.log(dt);
console.log(dt.getTime())//time in milliseconds from mid night
console.log(dt.toLocaleTimeString())
console.log(dt)
//we can set date and get date

//regex=regular expressions
//they are used to create patterns
let re =new RegExp('[A-Za-z]')
console.log(re.test('keerthy'));
//================================================
//BOM




