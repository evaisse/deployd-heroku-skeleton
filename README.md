 # Install on heroku


 Create app inside your folder

    # go to your newly downloaded apps folder
    cd deployd-heroku-skeleton

    # create app & bind to git repo
    heroku apps:create --region=my-region my-app-name

    # add mongodb (required)
    heroku addons:create mongolab:sandbox

    # optionnal, but this will be become handy to connect socket.io with redis
    # when you scale using multiple processors/servers
    heroku addons:create heroku-redis:hobby-dev

    # put your secret into you dotenv file (this is your config)
    heroku config -s >> .env

    # install deps
    npm install

    # run server
    npm start


Site should be localy available @ http://localhost:2403/