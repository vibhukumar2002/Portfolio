
// http://data.fixer.io/api/latest?access_key=e36465deb6e8be95a96dcf51d689a705` BASE API

// fetch(`http://data.fixer.io/api/convert?access_key=e36465deb6e8be95a96dcf51d689a705&from=${fromcur.value}&to=${tocur.value}&amount=${amount.value}`).then(res=>res.json())
//         .then(data=>{
//               console.log(data)
//         }) API FOR CURRENCY CONVERSION

   // fetch(`http://data.fixer.io/api/latest?access_key=e36465deb6e8be95a96dcf51d689a705`).then(res=>res.json()).then(data=>console.log(data))
  // fetch(`http://data.fixer.io/api/symbols?access_key=e36465deb6e8be95a96dcf51d689a705`).then(res=>res.json()).then(data=>console.log(data))
window.onload=()=>{
    var fromcur=document.querySelector("#fromcur")
    var tocur=document.querySelector("#tocur")
    var calcbtn=document.querySelector("#calc")
    var resultdiv=document.querySelector("#result")
    var symbols =document.querySelector("#symbols")
    var amount=document.querySelector("#amount")

    fetch(`http://data.fixer.io/api/symbols?access_key=e36465deb6e8be95a96dcf51d689a705`)
    .then(res=>res.json()).then(data=>{
        let i=data.symbols
        console.log(i)
        Object.keys(i).forEach(key=>{
            symbols.innerHTML+=`<option>${key}=${i[key]}</option>`
            fromcur.innerHTML+=`<option>${key}</option>`
            tocur.innerHTML+=`<option>${key}</option>`
            //console.log(`${key}=${i[key]}`)
        })
        
    })


    
    
    calcbtn.onclick=()=>
    {
        fetch(`http://data.fixer.io/api/latest?access_key=e36465deb6e8be95a96dcf51d689a705`)
        .then(res=>res.json())
        .then(data=>{
            let b=data.base
            Object.keys(data.rates).forEach(key=>{
                if(key==b)
                {
                    let fromcurrencybasevalue= Number(data.rates[fromcur.value])
                    let tocurrencybasevalue= Number(data.rates[tocur.value])
                    let a=amount.value
                    let res=Number(a)*(tocurrencybasevalue/fromcurrencybasevalue)
                    console.log(fromcurrencybasevalue,tocurrencybasevalue,a,res)
                    resultdiv.innerHTML=`<big> <i>  ${amount.value} ${fromcur.value} is equal to ${res} 
                    ${tocur.value} by todays market </i> </big>`
                }
            })
        })
    }
        

}