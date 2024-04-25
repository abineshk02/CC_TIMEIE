import {Client,Account,Databases} from 'appwrite'
const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("662ab0e087400d4e85dc")
export const account = new Account(client)

export const databases = new Databases(client,"662ab1ecc539bea6f48a")