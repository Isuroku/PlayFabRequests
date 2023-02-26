import axios from 'axios';


axios.post("https://A2545.playfabapi.com/Client/LoginWithCustomID", 
    { 
        titleId: 'A2545', CreateAccount: true, CustomId: 'Client1'
    }, 
    {
        headers: 
        {
          'content-type': 'application/json',
          'Content-Encoding': 'utf-8'
        }
    })
.then((response) => 
{
    const PlayFabId = response.data.data.PlayFabId;
    const NewlyCreated = response.data.data.NewlyCreated;
    const SessionTicket = response.data.data.SessionTicket;
    const TitlePlayerAccount = response.data.data.EntityToken.Entity.Id;
    const EntityToken = response.data.data.EntityToken.EntityToken;
    const Type = response.data.data.EntityToken.Entity.Type;
    const TypeString = response.data.data.EntityToken.Entity.TypeString;
    const TokenExpiration = response.data.data.EntityToken.TokenExpiration;

    console.log("PlayFabId: " + PlayFabId)
    console.log("NewlyCreated: " + NewlyCreated)
    console.log("SessionTicket: " + SessionTicket)
    console.log("TitlePlayerAccount: " + TitlePlayerAccount) //title_player_account
    console.log("EntityToken: " + EntityToken)
    console.log("Type: " + Type)
    console.log("TypeString: " + TypeString)
    console.log("TokenExpiration: " + TokenExpiration)
    //console.log(response.data)
})
.catch((error) => 
{
    console.log("ErrorMessage:")
    console.log(error.response.data.errorMessage)
});

// PlayFabId: 4136638E941F632B
// NewlyCreated: false
// SessionTicket: 4136638E941F632B-25A87F8D038D7DBE-44FA187E9DF2D27D-A2545-8DB17EE5D9A2238-hwYsSv4PgDLXPTdzr4bFeuXYJOBlFCT+pWMqcsa+cpE=
// TitlePlayerAccount: 44FA187E9DF2D27D
// EntityToken: NHx3UHJXV2hmMlFjT3BXMHFVdTFyNGtxNzBBOXpVcm5mY1VhVndNb0ZwVVNZPXx7ImkiOiIyMDIzLTAyLTI2VDExOjQxOjE0WiIsImlkcCI6IkN1c3RvbSIsImUiOiIyMDIzLTAyLTI3VDExOjQxOjE0WiIsImZpIjoiMjAyMy0wMi0yNlQxMTo0MToxNFoiLCJ0aWQiOiJNTGhkVGpQSVRxWSIsImlkaSI6IkNsaWVudDEiLCJoIjoiNUZBQzQ3M0Q4QzAyMkJERCIsImVjIjoidGl0bGVfcGxheWVyX2FjY291bnQhMjVBODdGOEQwMzhEN0RCRS9BMjU0NS80MTM2NjM4RTk0MUY2MzJCLzQ0RkExODdFOURGMkQyN0QvIiwiZWkiOiI0NEZBMTg3RTlERjJEMjdEIiwiZXQiOiJ0aXRsZV9wbGF5ZXJfYWNjb3VudCJ9
// Type: title_player_account
// TypeString: title_player_account
// TokenExpiration: 2023-02-27T11:41:14Z