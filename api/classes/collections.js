module.exports={
    User,
    Friendship,
    Message,
    Group,
    Membership
};

class User {
    //_id
    Nick;
    Login;
    Password;
    Email;
    Aboutme;
    Status;
    ProfilePicture;
    CoverPicture;
    CreateDate;

    constructor(Nick, Login, Password, Email, Aboutme, Status, ProfilePicture, CoverPicture) {
        Nick;
        Login;
        Password;
        Email;
        Aboutme;
        Status;
        ProfilePicture;
        CoverPicture;
        CreateDate=new Date();
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