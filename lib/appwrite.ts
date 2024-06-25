import { Avatars, Client, Databases, Query } from 'react-native-appwrite';
import { Account } from 'react-native-appwrite';
import { ID } from 'react-native-appwrite';


export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.cody.aora',
    projectId:'667524bf001935cf5b34',
    databaseId:'66752f10003ab3601c75',
    userCollectionId:'6675300c000526ed29f3',
    videoCollectionId: '66753032003457ef81db',
    storageId:'667532ca00013629831c',
}


// Init your React Native SDK
const client = new Client();


client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client)
const database = new Databases(client);



export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username,
        )
        if (!newAccount) throw new Error;
        const avatarUrl = avatars.getInitials(username)
        await signIn(email, password)
        const newUser = await database.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar:avatarUrl
            }
        )
        return newUser;
        
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
    }
type userInfo = {
    email: string,
    password:string,
    
}
export const signIn = async ({ email, password }: userInfo) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);

    } catch (error) {
        throw new Error(error)
    }
    
}
export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();
        if (!currentAccount) throw Error;

        const currentUser = await database.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )
        if (!currentUser) throw Error;
        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
    }
}