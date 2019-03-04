const user = {
    fname:'M',
    lname:'J',
    twitter:'mpjm'
}
// const {fname,lname} = user
const {lname,...withoutLname} = user
console.log(withoutLname)