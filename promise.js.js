var BankAccNumber =124;
    var promise =new Promise(function(resolve,reject){
        setTimeout(()=>{if(BankAccNumber==1234){
            resolve('welcome')
        }else{
            reject('authentication problem')
        }},1000);
    }).then((resolve)=>{console.log(resolve)},(reject)=> {   
         console.log(reject);
    })