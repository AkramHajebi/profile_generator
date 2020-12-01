const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (answer1) => {
  console.log(`${answer1}`);
  
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    console.log(`${answer2}`);
    
    rl.question('What do you listen to while doing that? ', (answer3) => {
      console.log(`${answer3}`);
      
      rl.question('What do you listen to while doing that? ', (answer4) => {
        console.log(`${answer4}`);
        
        rl.question('Which meal is your favourite? ', (answer5) => {
          console.log(`${answer5}`);
          
          rl.question('What\'s your favourite thing to eat for that meal? ', (answer6) => {
            console.log(`${answer6}`);
            
            rl.question('Which sport is your absolute favourite? ', (answer7) => {
              console.log(`${answer7}`);

              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer8) => {
                console.log(`${answer8}`);
                
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});
