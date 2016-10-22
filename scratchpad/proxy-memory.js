#!/usr/bin/env node

var memory = [];
var proxy = new Proxy(memory, {

    get: (obj, property) => {
        property = (typeof property !== "number") ? parseInt(property, 10) : property;

        if (property >= 0x8000) {
            return property & 0xFF;
        }
    
        return (property in obj) ? obj[property] : 0;
    },

    set: (obj, property, value) => {
        property = (typeof property !== "number") ? parseInt(property, 10) : property;
        
        if (property >= 0x8000) {
            console.log("cannot set value in ROM: 0x%s = %s", property.toString(16), value);
            return;
        }
        
        obj[property] = value;

        return true;
    }

});


proxy[0] = 100;
proxy[0x8001] = 20;

console.log("0 = %s", proxy[0]);
console.log("1 = %s", proxy[1]);
console.log("0x8001 = %s", proxy[0x8001]);
console.log("0x8002 = %s", proxy[0x8002]);
