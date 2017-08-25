const db =require('../../services/araservices.js');
const aql= require('arangojs').aql;
module.exports = {
  getAllUsers : function()
    {

        return db.query(aql`FOR x IN ks RETURN x`)
        .then(arr=>{
            // console.log(arr.all());
          return arr.all()})
          .catch(err=>{return err});

    },
    getUserByKey : function(userKey)
    {
        var bindVars = {'userKey': userKey};
        return db.query(aql`FOR x IN User FILTER x._key == @userKey RETURN x`).then(arr=>{
            console.log(arr.all());
          return arr.all()}).catch(err=>{return err});

    },
    addUser : function(user)
    {
        return db.database('free')
                  .then(function (mydb) {return mydb.collection('User');})
                  .then(function (collection) { return collection.save(user);});
    },
    updateUser : function(user)
    {
        var bindVars = {'key': user.key, 'username': user.username,"email":user.email };
        return db.database('free')
                 .then(function (mydb) {return mydb.query('FOR x IN User FILTER x._key == @key UPDATE x WITH { username:@username, email:@email } IN User',bindVars );})
                 .then(function (cursor) { return cursor.all();});
    },
    removeUser : function(userKey)
    {
        var bindVars = {'userKey': userKey};
        return db.database('free')
                  .then(function (mydb) {return mydb.query('FOR x IN User FILTER x._key == @userKey REMOVE x IN User LET removed = OLD RETURN removed', bindVars);})
                  .then(function (cursor) {return cursor.all();});
    }
}
