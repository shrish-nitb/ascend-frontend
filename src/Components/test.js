const axios = require('axios');
let data = '';

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://project-ascend-backend.vercel.app/user',
  headers: {
    'Cookie': 'accessToken=eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiYjg3ZGNhM2JjYjY5ZDcyYjZjYmExYjU5YjMzY2M1MjI5N2NhOGQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUHJhdGhtZXNoIENoYXVyYXNpYSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKWVlqWmJoY3M4cXVibU9CaFdYbmoweXdvUHU3YWhsMEhmZklMTHY5bUE9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJqYXNjLTRjY2RlIiwiYXVkIjoicHJqYXNjLTRjY2RlIiwiYXV0aF90aW1lIjoxNzA5OTkzMjIxLCJ1c2VyX2lkIjoia0FZdHQ0VEpZM2ZXVXBXeUREUEttQ2QwcFVYMiIsInN1YiI6ImtBWXR0NFRKWTNmV1VwV3lERFBLbUNkMHBVWDIiLCJpYXQiOjE3MDk5OTMyMjEsImV4cCI6MTcwOTk5NjgyMSwiZW1haWwiOiJwcmF0aG1lc2hAem9yd2F5LmluIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDQ0OTIyMTUwNzU4NTcxOTgwNDEiXSwiZW1haWwiOlsicHJhdGhtZXNoQHpvcndheS5pbiJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.msIKygbl95PP0tevIRCaUtvBWPeC7yPiQCdUDozJaJcwa6au7-b5lm2yruN8p2hcvx3pakQzwklcyr_KZjoH_Z-Lw_OpFaxmiwPuRXKZEVxofe64VKXoSqTIevRcGpdwkTqV0CZMwpi8-inuWY3Ce2KRHx8T1GPagR14FR0hj8QFPmruPhs993fpRf6QzmAXcuIJwv5KTJxbJE19cKWAJYj1xR-LxWNSHtEXmidxY-07IE_8y2dPgRk3C0gAcCqBdy08fC5AEAHk0G2DaXXZVv4eau8K37cxpaPByJbNG1fbbqEgvs9svUute2vW69FZU7aLoAJpXs_EwBydlTNuCw'
  },
  data: data
};

axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });