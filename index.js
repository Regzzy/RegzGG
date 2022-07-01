const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {

const GoStumble = (auth) => new Promise((resolve, reject) => {

		
 fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
    method: 'GET',
    headers: {
      'authorization': auth
    }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});



  
  
console.log(chalk.bgRed('HALO PLAYER CUPU 🥴'));
  
console.log('')  

console.log(chalk.bgGreen('ϟMADED BY REGZZY#0001ϟ'));  
  
console.log('')  
  
  console.log(`Trophy And Crown By Regzzy#0001 😘!
By : ${chalk.bold('Regzzy#0001')} - Credit to special person : @dkmpostor & @Eskey ft @xDast#8745 
`);
	
console.log(`${chalk.green(`
1. PUSH TROPPHYY BY REGZZY#0001
2. PUSH CROWN + TROPHY BY REGZZY#0001
SILAHKAN PILIH`)} 
`);
const round = rs.question(`[+] Select Number  : `);
    console.log('');
    console.clear()
  
  
  
 
  const auth = rs.question('AUTH LUHE  : ');
  console.log('');
  console.clear()

  while (true) {

    const result = await GoStumble(auth);
    if (!result) {

      console.log(chalk.red(`\r[ ${moment().format('HH:mm:ss')} ] Codenya salah deck :`));
      

    } else if (result.includes('User')) {

      const data = JSON.parse(result);
      const username = data.User.Username;
      const country = data.User.Country;
      const trophy = data.User.SkillRating;
      const crown = data.User.Crowns;


console.log(chalk.bgRed('♠Status:Succes Sayang 😘♥️')); 
console.log('') 
console.log(chalk.bgWhite(`♠Negara Luhe😘 : ${country}`))
console.log('')   
console.log(chalk.bgGreen(`♠Jam Sekarangz😘 : [ ${moment().format('HH:mm:ss')} ]`),)     
console.log('')     
console.log(chalk.bgMagenta(`♠Nama Kamueh 😘 : ${username}`))   
console.log('')
console.log(chalk.bgYellow(`♠Trophy Luhe😘 : ${trophy}`))   
console.log('')
console.log(chalk.bgCyan(`♠Crown Kamuh😘 : ${crown}`))      
      
      await GoStumble(auth);
      await GoStumble(auth);
      await GoStumble(auth);
      await GoStumble(auth);
      console.log('')
      console.log('')
      await sleep(10000);
      
      

    } else if (result == 'BANNED') {
      console.log(chalk.bgRed(`Your Account has been Banned`));
     break;
    }
  }


})();
