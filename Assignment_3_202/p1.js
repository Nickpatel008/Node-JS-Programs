const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var playername = "";
var score = 0;
var total = 0;

const questions = () => {
    
    // Question 1...

    console.log("1. What Is The Most Popular Map In CS:GO? ");
    console.log("A. Dust II");
    console.log("B. Inferno");
    console.log("C. Mirage");
    console.log("D. Cobblestone");

    rl.question("Answer : " , (ans) => {
        if(ans == "A" || ans == "a")
        {
            console.log("Correct Answer...");
            score = score + 5;
            console.log("Score = " , score);
        }
        else
        {
            console.log("Wrong Answer...");
            if(score === 0)
            {
                score = 0;
            }
            else
            {
                score = score - 2;
            }
        }

        // Question 2...

        console.log("2. Which Gun Out Of This List Has The Best Accuracy When Running?");
        console.log("A. MP9");
        console.log("B. Mac-10");
        console.log("C. P90");
        console.log("D. AK-47");

        rl.question("Answer : " , (ans) => {
            if(ans == "C" || ans == "c")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 3...

        console.log("3. How Much Damage Does The Ak-47 Roughly Do At Point-blank? (excluding Head)");
        console.log("A. 25");
        console.log("B. 40");
        console.log("C. 70");
        console.log("D. 15");

        rl.question("Answer : " , (ans) => {
            if(ans == "B" || ans == "b")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 4...

        console.log("4. What Is The Highest Rank Possible In CS:GO Competitive?");
        console.log("A. Supreme Master");
        console.log("B. Distinguished Master Guardian");
        console.log("C. Global Elite");
        console.log("D. Silver 1");

        rl.question("Answer : " , (ans) => {
            if(ans == "C" || ans == "c")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 5...

        console.log("5. How Much Damage Does The SSG 08 Do At Point Blank Range? (excluding Head)");
        console.log("A. 100");
        console.log("B. 90");
        console.log("C. 70");
        console.log("D. 50");

        rl.question("Answer : " , (ans) => {
            if(ans == "B" || ans == "b")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 6...

        console.log("6. When Was CS:GO Released?");
        console.log("A. 2016");
        console.log("B. 2012");
        console.log("C. 2014");
        console.log("D. 2010");

        rl.question("Answer : " , (ans) => {
            if(ans == "B" || ans == "b")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 7...

        console.log("7. When Were Skins Released In CS:GO?");
        console.log("A. 2013");
        console.log("B. 2015");
        console.log("C. 2014");
        console.log("D. 2017");

        rl.question("Answer : " , (ans) => {
            if(ans == "A" || ans == "a")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 8...

        console.log("8. What Is The Name Of The First Case In CS:GO?");
        console.log("A. CS:GO Weapon Case");
        console.log("B. Operation Hydra Case");
        console.log("C. Horizon Case");
        console.log("D. Danger Zone Case");

        rl.question("Answer : " , (ans) => {
            if(ans == "A" || ans == "a")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 9...

        console.log("9. What Is Prime Status In CS:GO?");
        console.log("A. A matchmaking addon which reduces your chances of getting matched with hackers.");
        console.log("B. Admin privlages.");
        console.log("C. Being able to use cheats in game.");
        console.log("D. Being matched quicker than other users.");

        rl.question("Answer : " , (ans) => {
            if(ans == "A" || ans == "a")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 10...

        console.log("10. Which Rank Is Most Common In CS:GO Competitive?");
        console.log("A. Gold Nova 3");
        console.log("B. Silver Elite Master");
        console.log("C. Distinguished Master Guardian");
        console.log("D. Silver II");

        rl.question("Answer : " , (ans) => {
            if(ans == "A" || ans == "a")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("================================ \n");
                console.log("Player  = " , playername);
                console.log("Total Score  = " , score + "\n");
                console.log("================================");
                rl.close();
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
                console.log("================================ \n");
                console.log("Player  = " , playername);
                console.log("Total Score  = " , score + "\n");
                console.log("================================");
                rl.close();
            }
    


            });
            });
            });
            });
            });
            });
            });
            });
        });
    });

};

const startgame = () => {

    console.log("1. Start");
    console.log("2. Exit");

    rl.question("Enter Your Choice = " , (ans) => {
        if(ans == 1) 
        {
            rl.question("Enter Your name = " , (uname) => {
                playername = uname;
                if(playername.length > 0)
                {
                    console.log(playername);
                    questions();
                }
                else
                {
                    console.log("Enter Valid Name...");
                    startgame();
                }
            });
        }
        else if(ans == 2)
        {
            rl.close();
        }
        else
        {
            console.log("Enter Valid Name...");
            startgame();
        }
    });

   
};


startgame();

