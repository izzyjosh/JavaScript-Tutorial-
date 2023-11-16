const person = {
  firstName : "joshua",
  lastName : "joseph",
  clap : function clap1 () {
    console.log("i am clapping");
  },
};
person.nickName = "sele";
person.friend = "Mike";
delete person.nickName;
person["nickName"] = "sele";
console.log(person.clap());


console.log("hello world")
<!-- called destructuring -->
const {firstName,lastName} = person;
console.log(firstName )

<!-- converting the above object to json string -->
console.log(JSON.stringify(person))

<!--use for converting a json like string to JSON objects-->
console.log(JSON.parse(JSON.stringify(person)))