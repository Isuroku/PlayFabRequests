import axios from 'axios';

axios.post("https://A2545.playfabapi.com/Server/AuthenticateSessionTicket", 
    { 
        SessionTicket: '4136638E941F632B-25A87F8D038D7DBE-44FA187E9DF2D27D-A2545-8DB17EE5D9A2238-hwYsSv4PgDLXPTdzr4bFeuXYJOBlFCT+pWMqcsa+cpE='
    }, 
    {
        headers: 
        {
          'content-type': 'application/json',
          'Content-Encoding': 'utf-8',
          'X-SecretKey': '73E68RPHN5MDM3TPXFJ17YKWM5A9XRJBP8JZBOSRC93973ENOT'
        }
    })
.then((response) => 
{
    const IsSessionTicketExpired = response.data.data.IsSessionTicketExpired;
    const Created = response.data.data.UserInfo.Created;
    const CustomId = response.data.data.UserInfo.CustomIdInfo.CustomId;
    const PlayFabId = response.data.data.UserInfo.PlayFabId;
    const FirstLogin = response.data.data.UserInfo.TitleInfo.FirstLogin;
    const LastLogin = response.data.data.UserInfo.TitleInfo.LastLogin;
    const isBanned = response.data.data.UserInfo.TitleInfo.isBanned;
    const Origination = response.data.data.UserInfo.TitleInfo.Origination;
    const TitlePlayerAccountId = response.data.data.UserInfo.TitleInfo.TitlePlayerAccount.Id;
    const TitlePlayerAccountType = response.data.data.UserInfo.TitleInfo.TitlePlayerAccount.Type;
    const TitlePlayerAccountTypeString = response.data.data.UserInfo.TitleInfo.TitlePlayerAccount.TypeString;

    console.log("IsSessionTicketExpired: " + IsSessionTicketExpired)
    console.log("Created: " + Created)
    console.log("CustomId: " + CustomId)
    console.log("PlayFabId: " + PlayFabId)
    console.log("FirstLogin: " + FirstLogin)
    console.log("LastLogin: " + LastLogin)
    console.log("isBanned: " + isBanned)
    console.log("Origination: " + Origination)
    console.log("TitlePlayerAccountId: " + TitlePlayerAccountId)
    console.log("TitlePlayerAccountType: " + TitlePlayerAccountType)
    console.log("TitlePlayerAccountTypeString: " + TitlePlayerAccountTypeString)

    //console.log(response.data)
})
.catch((error) => 
{
    console.log("Status: " + error.response.status)
    console.log("Status: " + error.response.statusText)
    console.log("ErrorMessage: " + error.response.data.errorMessage)
    console.log("ErrorCode: " + error.response.data.errorCode)
});

// IsSessionTicketExpired: false
// Created: 2023-01-30T18:18:04.908Z
// CustomId: Client1
// PlayFabId: 4136638E941F632B
// FirstLogin: 2023-01-30T18:18:04.908Z
// LastLogin: 2023-02-26T14:16:53.595Z
// isBanned: false
// Origination: CustomId
// TitlePlayerAccountId: 44FA187E9DF2D27D
// TitlePlayerAccountType: title_player_account
// TitlePlayerAccountTypeString: title_player_account