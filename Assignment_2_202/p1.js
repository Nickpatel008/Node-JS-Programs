const os = require("os");

try {

    console.log("CPU ARCHITECTURE = " + os.arch());
    console.log("Free Memory = " + os.freemem());
    console.log("Total Memory = " + os.totalmem());
    console.log("User INFO = " + os.userInfo());

} catch (err) {
    console.log("Error " + err);
}