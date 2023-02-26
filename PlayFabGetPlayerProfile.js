import axios from 'axios';

axios.post("https://A2545.playfabapi.com/Server/GetPlayerProfile", 
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
    const PlayerId = response.data.data.PlayerProfile.PlayerId;
    const PublisherId = response.data.data.PlayerProfile.PublisherId;
    const TitleId = response.data.data.PlayerProfile.TitleId;
    const Origination = response.data.data.PlayerProfile.Origination;
    const LastLogin = response.data.data.PlayerProfile.LastLogin;

    console.log("PlayerId: " + PlayerId)
    console.log("PublisherId: " + PublisherId)
    console.log("TitleId: " + TitleId)
    console.log("Origination: " + Origination)
    console.log("LastLogin: " + LastLogin)
    //console.log(response.data)
})
.catch((error) => 
{
    console.log("Status: " + error.response.status)
    console.log("Status: " + error.response.statusText)
    console.log("ErrorMessage: " + error.response.data.errorMessage)
    console.log("ErrorCode: " + error.response.data.errorCode)
});
