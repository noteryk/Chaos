class User {
    //_id
    nick;
    login;
    password;
    email;
    createDate;
    
    constructor(nick=login, login=null, password=null, email=null) {
        nick;
        login;
        password;
        email;
        createDate=new Date();
        return {
            nick,
            login,
            password,
            email,
            createDate
        };
    }

    validate(schema) {
        const { error, value }=schema.validate({});
        return {
            error,
            value
        }
    }

    insert(server, collection) {

    }
};

class Friendship {
    //_id
    senderID;
    receivweID;
    status;
    muted;
    
    constructor(senderID, receivweID, status) {
        senderID;
        receivweID;
        status;
        muted;
    }
};

class Message {};

class Group {};

class Membership {};

module.exports={
    User,
    Friendship,
    Message,
    Group,
    Membership
};