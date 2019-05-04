var SampleJson = {
  user: [
    {
      name: "Create User",
      endPoint: "/users",
      actionType: "POST",
      request: `
      {
        "password": "99999999",
        "role_id": "2",
        "telephone": "123",
        "address1": "addr1",
        "address2": "addr2",
        "firstname": "joe",
        "lastname": "zhou",
        "gender": "m",
        "email": "joevendor@gmail.com",
        "username": "joevendor"
      }`,
      response: `
      {
        "id": 8,
        "username": "shepi888",
        "email": "shepi888@gmail.com",
        "role": {
            "id": 1,
            "code": "USER"
        },
        "telephone": "123",
        "address1": "addr1",
        "address2": "addr2",
        "firstname": "joe",
        "lastname": "zhou",
        "gender": "m",
        "admin": false,
        "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGVwaTg4OCIsInJvbGVzIjpbIlJPTEVfVVNFUiJdLCJpYXQiOjE1NTY2MjE0OTR9.fd74NyyupnrvQ2Ng2UMQWJmkAVhDgr_rBJasQmkmpjc",
        "refreshToken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGVwaTg4OC5yZWZyZXNoLnRva2VuIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTU1NjYyMTQ5NH0.rxASvqaBEoaW-cvc4ACNQWxT4m9cAqQICpp0glCUEP8"
      }`
    }
  ]
};

export default SampleJson;