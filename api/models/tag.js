const generateTag = (server, collection, name, tagSize=4) => {
    //math random
    let tag = '';
    for (let i = 0; i < tagSize; i++) {
        tag += Math.floor(Math.random() * 10);
    }
    //check if tag is unique
    const isUnique = server.db().collection(collection).findOne({
        name: name,
        tag: tag
    });
    if (!isUnique) {
        return generateTag(server, name, tagSize);
    }
    return tag;
};

module.exports=generateTag;