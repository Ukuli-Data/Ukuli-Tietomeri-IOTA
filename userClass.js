/* This is just information about a user regarding use of IOTA. 
Different model for situations like customer support chat and shopping of electronics? */

const IOTAuser = {
    userid: 0,                           // Userid zero if not logged in
    username: "Anonymous",              // Anonymous if not logged in
    IOTAaccount: 0,                    // IOTA would be the only cryptocurrency in an account on site (unless we add another crypto?)
    IOTAbalance: 0,                   // Balance on site account
    SubscriptionLevel: 0,            // Zero if no subscription, one if free subscription, two if cheap subscription etc.
    SubscriptionDuration: 0,        // Days remaining of the subscription.
    UnpaidSubscription: 0,         // Maksamattomat laskut
    IoTDevices: [],               // List of IoT devices he has on our service -> devices should be objects 
    IPAddress: "127.0.0.1",      // Just in case an anonymous user happens to be a "hacker" or something. 
    Blocked:  false,            // Block bot users, hackers, trolls, etc.
    Dashboard: {},             // Object with settings of his personal dashboard if he is a subscriber.
};

function userVisitsSite() {

}

function userRegisters() {

}

function userLogins() {

}

function userLogsOut() {

}

module.exports = {
    userVisitsSite,
    userRegisters,
    userLogins,
    userLogsOut,
    userSubscribes,
    userChangesSubscriptionLevel,
    userIncreasesSubscriptionDuration,
    userCancelsSubscription,
    userMakesIOTADeposit,
    userWithdrawsIOTA,
    usersUnpaidSubscriptionCancelled,
    userUpdatesDashboard,
    userAddsNewDevice,
    usersUnpaidSubscriptionCancelled,
    userBlockedDueToTrollingOrSpamming,
};
