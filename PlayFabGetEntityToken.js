import axios from 'axios';

axios.post("https://A2545.playfabapi.com/Authentication/GetEntityToken", 
    { 
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
    const ProjectId = response.data.data.Entity.Id;
    const Type = response.data.data.Entity.Type;
    const TypeString = response.data.data.Entity.TypeString;
    const EntityToken = response.data.data.EntityToken;
    const TokenExpiration = response.data.data.TokenExpiration;

    console.log("ProjectId: " + ProjectId) //title
    console.log("Type: " + Type)
    console.log("TypeString: " + TypeString)
    console.log("EntityToken: " + EntityToken)
    console.log("TokenExpiration: " + TokenExpiration)

    //console.log(response.data)
})
.catch((error) => 
{
    console.log("ErrorMessage: " + error.response.data.errorMessage)
    console.log("ErrorCode: " + error.response.data.errorCode)
});

// ProjectId: A2545
// Type: title
// TypeString: title
// EntityToken: NHx5blVLSENGVkgxMExrb1p2RHJReWc3MnpVV0gvTm5FMGZ3Zjc4b1pBelJJPXx7ImkiOiIyMDIzLTAyLTI2VDE0OjEyOjExWiIsImlkdCI6IlVua25vd24iLCJpZHAiOiJVbmtub3duIiwiZSI6IjIwMjMtMDItMjdUMTQ6MTI6MTFaIiwiZmkiOiIyMDIzLTAyLTI2VDE0OjEyOjExWiIsInRpZCI6IkhhWHZRZTJZTWZzIiwiaCI6IjVGQUM0NzNEOEMwMjJCREQiLCJlYyI6InRpdGxlITI1QTg3RjhEMDM4RDdEQkUvQTI1NDUvIiwiZWkiOiJBMjU0NSIsImV0IjoidGl0bGUifQ==
// TokenExpiration: 2023-02-27T14:12:11Z