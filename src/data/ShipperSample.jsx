var SampleJson = {
  shipper: [
    // API Auth
    {
      name: "Get Shipper",
      endPoint: "/shippers/:id",
      actionType: "GET",
      request: ``,
      response: `
      {
        "id": 1,
        "name": "Test Shipper",
        "contact": "8976556456"
      }`
    },
    {
      name: "Get Shippers",
      endPoint: "/shippers?page=0&size=2&sort=contact",
      actionType: "GET",
      requestParameter: [
        {
          key: "page",
          type: "Integer",
          optional: "N/A"
        },
        {
          key: "size",
          type: "Integer",
          optional: "N/A"
        },
        {
          key: "sort",
          type: "String",
          optional: ["contract"]
        }
      ],
      request: ``,
      response: `
      {
        "links": [
            {
                "rel": "self",
                "href": "http://localhost:8080/api/shippers/products"
            }
        ],
        "content": [
            {
                "id": 1,
                "name": "Test Shipper",
                "contact": "8976556456"
            }
        ],
        "page": {
            "size": 2,
            "totalElements": 1,
            "totalPages": 1,
            "number": 0
        }
      }`
    },
    {
      name: "Create Shipper",
      endPoint: "/shippers",
      actionType: "POST",
      request: `
      {
        "name": "Test Shipper",
        "contact": "8976556456"
      }`,
      response: `
      {
        "id": 1,
        "name": "Test Shipper",
        "contact": "8976556456"
      } `
    },
    {
      name: "Update Shipper",
      endPoint: "/shippers/:id",
      actionType: "PUT",
      request: `
      {
        "name": "Test Shipper",
        "contact": "8976556456"
      }`,
      response: `
      {
        "id": 1,
        "name": "Test Shipper",
        "contact": "8976556456"
      } `
    },
    {
      name: "Delete Shipper",
      endPoint: "/shippers/:id",
      actionType: "DELETE",
      request: "",
      response: ""
    }
  ]
};

export default SampleJson;
