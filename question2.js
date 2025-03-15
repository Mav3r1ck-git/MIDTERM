const countProperties = (object) => {
    return Object.keys(object).length
}

console.log(countProperties({a:1,b:2,c:3}))