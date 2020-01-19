var md5 = require('md5');

emit(dpd.users, {admin:true}, 'users:created', {username: this.username} );

this.avatar = "https://www.gravatar.com/avatar/"+md5(this.email+"")+".jpg";

console.log(this);
