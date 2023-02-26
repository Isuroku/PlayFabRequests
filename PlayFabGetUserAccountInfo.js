import axios from 'axios';

axios.post("https://A2545.playfabapi.com/Server/GetUserAccountInfo", 
    { 
        PlayFabId: '4136638E941F632B',
        ProfileConstraints:
        {
            ShowLastLogin: true,
            ShowOrigination: true
        }
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
    const Created = response.data.data.UserInfo.Created;
    const CustomId = response.data.data.UserInfo.CustomIdInfo.CustomId;
    const FirstLogin = response.data.data.UserInfo.TitleInfo.FirstLogin;
    const LastLogin = response.data.data.UserInfo.TitleInfo.LastLogin;
    const isBanned = response.data.data.UserInfo.TitleInfo.isBanned;
    const Origination = response.data.data.UserInfo.TitleInfo.Origination;
    const TitlePlayerAccountId = response.data.data.UserInfo.TitleInfo.TitlePlayerAccount.Id;
    const TitlePlayerAccountType = response.data.data.UserInfo.TitleInfo.TitlePlayerAccount.Type;
    const TitlePlayerAccountTypeString = response.data.data.UserInfo.TitleInfo.TitlePlayerAccount.TypeString;

    console.log("Created: " + Created)
    console.log("CustomId: " + CustomId)
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
