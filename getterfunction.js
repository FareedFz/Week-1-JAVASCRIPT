var txt="";
var x;
var person={
    firstName:"shahul",
    lastName:"fareed",
    language:"no",
    get fullname(){
         return this.firstName+" "+this.lastName;
    },
    get lang(){
        return this.language;
    },
    set lang(lang){
         this.language=lang;
    }
}
console.log(person.fullname);
//person.lang;
person.lang="en";
console.log(person.lang);
for (x in person) {
    txt=txt+person[x]+", ";

}
console.log(txt);
