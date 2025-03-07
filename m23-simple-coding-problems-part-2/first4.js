
function getCheapestPhone(mobile){
    let div = mobile[0];
    for(let smartPhone of mobile){
        if(smartPhone.price < div.price){
            div = smartPhone;
        }
    }
    return div;
}
function getLatestPhone(mobiles){
    let div = mobiles[0];
    for(const smartPhone of mobiles){
        if(div.price < smartPhone.price){
            div = smartPhone;
        }
    }
    return div;
}


const mobiles = [
    {fullName: 'samsung',price: 20000,camera: '12mp',color: 'black'},
    {fullName: 'xoami',price: 12000,camera: '12mp',color: 'golden'},
    {fullName: 'oppo',price: 48000,camera: '12mp',color: 'white'},
    {fullName: 'iphone',price: 90000,camera: '12mp',color: 'black'},
    {fullName: 'walton',price: 32000,camera: '12mp',color: 'black'},
    {fullName: 'readme',price: 18000,camera: '12mp',color: 'black'},
];

let phone = getCheapestPhone(mobiles);
console.log('cheapest phone is:',phone);
console.log('latest phone is:',getLatestPhone(mobiles));