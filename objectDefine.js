var person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO", 
};

Object.defineProperty(person, "language", {
  value: "EN",
  writable : true,
  enumerable : true,
  configurable : true
});
Object.defineProperty(person, "firstName", {
    value: "Shahul",
    writable : true,
    enumerable : true,
    configurable : true});

txt = "";
for (var x in person) {
  txt += person[x] +"\n";
}
console.log(txt);