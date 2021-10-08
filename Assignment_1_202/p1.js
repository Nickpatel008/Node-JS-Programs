const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const fs = require("fs");
const path = require("path");

// var init...

var filename = "";
var data = "";
var nfname = "";

// Create Directory...

var createDir = () => {
    console.log("new dir");

    rl.question("Enter Directory Name = " , (ans) => {
        var dirname = ans;
        fs.mkdir(path.join(__dirname , dirname) , (err) => {
            if(err)
            {
                console.log("Error while creating DIR..." , err);
                rl.close();
            }
            else
            {
                console.log("Directory Created Successfully...");
                repeat();
            }
        });
    });

};

// Remove Directory...

var removeDir = () => {
    console.log("Delete dir");
    
    rl.question("Enter Direcory Name = " , (ans) => {
        
        fs.rmdir(ans , (err) => {
          
            if (err)
            {   
                console.log("ERROR : File Not Found...");
                rl.close();
            }
            else
            {
                console.log("Direcory Deleted Successfully...");
                repeat();
            }
        });

    });

};

// File Creation Module...

var letsCreateFile = () => {
    fs.writeFile(filename , data , (err) => {
        if (err)
        {
            console.log("ERROR : error while Createing File..." , err);
            rl.close();
        }
        else
        {
            console.log("File Created Successfully...");
            repeat();
        }
    });
};

// Create New File...

var createFile = () => {
    console.log("Create File");
    
    rl.question("Enter File Name = " , (ans) => {
        filename = ans + ".txt";

        rl.question("Enter Data = " , (ans) => {
            data = ans;
            letsCreateFile();
        });

    });

};

// Read File...

var openFile = () => {
    console.log("Open File");
    
    rl.question("Enter File Name = " , (ans) => {
        fname = ans + ".txt";
        fs.readFile(fname , "utf8" , function(err , data) {

            if(err)
            {
                console.log("\n File Not Found... \n" , err);
                rl.close();
            }
            else
            {
                console.log("\n ***** Data ***** \n");
                console.log(data);
                console.log("\n\n\n");
                
                repeat();
            }

        });
    });    

};

// Append File...

var letsAppendFile = () => {
    console.log("Append File");
    
    rl.question("Enter File Name = " , (ans) => {
        fname = ans + ".txt";
        rl.question("Enter Data Which You Want To Append = " , (ans) => {
            data = ans;
            fs.appendFile(fname , data , (err) => {
                if(err)
                {
                    console.log("ERROR : File Not Found..." , err);
                }
                else
                {
                    console.log("File Appended Successfully...");
                    repeat();
                }
            });
        });
    });

};

// Update | Replace File...

var letsUpdateFile = () => {
    console.log("Update File");
    
    rl.question("Enter File Name = " , (ans) => {
        fname = ans + ".txt";
        rl.question("Enter New Data = " , (ans) => {
            data = ans;
            fs.writeFile(fname , data , (err) => {
                if(err)
                {
                    console.log("ERROR : File Not Found..." , err);
                    rl.close();
                }
                else
                {
                    console.log("Data Updated...");
                    repeat();
                }
            });
        });
    });

};

// Rename File...

var letsRenameFile = () => {
    console.log("Rename File");
    
    rl.question("Old File Name = " , (ans) => {
        fname = ans + ".txt";
        rl.question("New File name = " , (ans) => {
            nfname = ans + ".txt";
            fs.rename(fname , nfname , (err) => {
                if(err)
                {
                    console.log("ERROR : File Not Found..." , err);
                    rl.close();
                }
                else
                {
                    console.log("Rename File Successfully...");
                    repeat();
                }
            });
        });
    });

};

// Delete File...

var letsDeleteFile = () => {

    rl.question("Enter File Name = " , (ans) => {
        fname = ans + ".txt";

        fs.unlink(fname , (err) => {
            if(err)
            {
                console.log("ERROR : File Not Found");
                rl.close();
            }
            else
            {
                console.log("File Delete Successfully...");
                repeat();
            }

        });

    });

};

// Menu...

const menu = () => {

    console.log("\n1. Create Directory");
    console.log("2. Remove Directory");
    console.log("3. Create File");
    console.log("4. Read File");
    console.log("5. Delete File");
    console.log("6. Append Data In File");
    console.log("7. Update | Replace File with New Data");
    console.log("8. Rename File");
    console.log("9. Exit \n");

};

// UI CLI BASE...

var start = () => {

    rl.question("Enter Your Choice = " , (ans) => {

        if(ans === "1")
        {
            console.log("Create Directory");
            createDir();
        }
        else if(ans === "2")
        {
            console.log("Remove Directory");
            removeDir();
        }
        else if(ans === "3")
        {
            console.log("Create File");
            createFile();
        }
        else if(ans === "4")
        {
            console.log("Read File");
            openFile();
        }
        else if(ans === "5")
        {
            console.log("Delete File");
            letsDeleteFile();
        }
        else if(ans === "5")
        {
            console.log("Append Data In File");
            letsAppendFile();
        }
        else if(ans === "6")
        {
            console.log("Update \ Replace File with New Data");
            letsUpdateFile();
        }
        else if(ans === "7")
        {
            console.log("Rename File");
            letsRenameFile();
        }
        else if(ans === "8")
        {
            console.log("Exit");
            rl.close();
        }
        else
        {
            console.log("Invalid Choice...");
        }

    });

};

// Function init...

var repeat = () => {
    menu();
    start();
};

// Invoking Function...

repeat();