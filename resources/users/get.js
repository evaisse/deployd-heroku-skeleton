dpd.users.get({id: {$in: this.friends}}, function(friends) {
    if (friends) this.friends = friends;
});

// keep here to verify issue:
// https://github.com/deployd/deployd/issues/565

if (isMe(this.id) || me.admin) {
    // show all
} else {
    // dot not allow other users to see user list
    cancel('bad boy');
    error('spa cool');
    ctx.done();
}

