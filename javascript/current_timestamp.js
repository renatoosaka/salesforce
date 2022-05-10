const today = new Date()

console.log(`Today is ${today.toLocaleDateString('en', { weekday: "long"})} and Current time is  ${today.toLocaleTimeString('en', { timeStyle: "medium" })}`)