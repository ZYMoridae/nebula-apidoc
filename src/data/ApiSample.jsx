var SampleJson = {
  auth: [
    // API Auth
    {
      name: "Auth",
      endPoint: "/auth/signin",
      actionType: "GET",
      request: ``,
      response: `
      {
        "user": {
            "id": 4,
            "username": "joeadmin",
            "email": "joeadmin@gmail.com",
            "role": {
                "id": 2,
                "code": "ADMIN"
            },
            "createdAt": "2019-04-13",
            "updatedAt": "2019-04-13",
            "telephone": "123",
            "address1": "addr1",
            "address2": "addr2",
            "firstname": "joe",
            "lastname": "zhou",
            "gender": "m",
            "admin": false
        },
        "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2VhZG1pbiIsInJvbGVzIjpbXSwiaWF0IjoxNTU2MTU1ODY2fQ.Us6CGAx1WdwNnb8wxCy3-qtFs4gSK2bV1uA2Rm2MupI",
        "refreshToken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2VhZG1pbi5yZWZyZXNoLnRva2VuIiwicm9sZXMiOltdLCJpYXQiOjE1NTYxNTU4NjZ9.b71qsuHEX6XN5BSwFDyCYQcG3fgIJ-8FV2QiwL_xRnk"
      }`,
      header: [
        {
          name: "Authorization",
          value: "Basic am9lYWRtaW46OTk5OTk5OTk="
        }
      ]
    }
  ]
}

export default SampleJson;