import{c as t,D as o}from"./vendor.f8ef8837.js";t({data:()=>({counter:"Ajax test!"}),mounted(){o.get("http://kira7.com/data/comic/20001").then((t=>{this.counter=Object.keys(t.data.list).length})).catch((function(t){console.log(t)}))}}).mount("#counter");