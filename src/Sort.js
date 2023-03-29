import React, { useState } from 'react';

 const Sort = () => {
  let mobiles = [{
    id:"001",
    name :"oneplus11",
    price : 56999,
    isPurchased: true},
    {
    id:"002",
    name : "Vivi Y100",
    price : 24999,
    isPurchased: false},
    {
    id:"003",
    name : "Redmi 10",
    price : 56999,
    isPurchased : true},
    {
    id:"004",
    name : "iphone 13",
    price : 62990,
    isPurchased : false},
    {
    id:"005",
    name : "Nokia",
    price : 12000,
    isPurchased : true},
    {
    id:"006",
    name : "Poco M4",
    price : 13999,
    isPurchased : true}];



const[arr,setMobiles]=useState(mobiles);

const sortMobilesLHigh = () => {
const sortedMobilesLTH = [...arr].sort((a, b) => a.price - b.price);
  setMobiles(sortedMobilesLTH);
};
const sortMobilesHLow = () => {
const sortedMobilesHTL =[...arr].sort((a, b) => a.price - b.price);
  setMobiles(sortedMobilesHTL.reverse());
};
const filtermobiles=()=>{
  const filteredmobiles =arr.filter((elm)=>elm.isPurchased===true)
  setMobiles(filteredmobiles)
}
  return (
    <div>
          <button onClick={filtermobiles}>Filter</button>
        <button  onClick={sortMobilesLHigh}>LOW TO HIGH</button>
        <button onClick={sortMobilesHLow}>HIGH TO LOW</button>
      
       { arr.map((ele,i)=><h3 key={i}>{ele.name}</h3>)}
       {arr.map((n,i) => (
          <div key={i}>
            <h1>Mobile name:{n.name}</h1>
            <h4>Price: {n.price}</h4>
          </div>
        ))}
        
    </div>
  )
}
export default Sort;

   