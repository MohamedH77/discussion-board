const User = require("./User")
const UserPost = require("./UserPost")
const Comments = require("./Comments")
const Tag = require("./Tag")
const Like = require("./Like")


UserPost.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(UserPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

UserPost.belongsTo(Tag, {
    foreignKey: 'tag_id',
});

Tag.hasMany(UserPost, {
    foreignKey: 'tag_id',
    onDelete: 'CASCADE',
});

Comments.belongsTo(UserPost, {
    foreignKey: 'userPost_id',
});

UserPost.hasMany(Comments, {
    foreignKey: 'userPost_id',
    onDelete: 'CASCADE',
});

Comments.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.belongsToMany(UserPost, {
    through: Like,
    as: 'liked_by'

})

UserPost.belongsToMany(User, {
    through: Like,
    as: 'likes'
})


module.exports = { UserPost, User, Comments, Tag, Like}
  