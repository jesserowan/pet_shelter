const express = require('express'),
           bp = require('body-parser'),
         port = 8000,
         path = require('path'),
         cors = require('cors'),
          app = express();

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(bp.json());

app.use(cors());

require("./utils/mongoose")("pets");
require("./utils/routes")(app);

app.all('*', (req, res, next) => {
  res.sendFile(path.resolve('./client/build/index.html'));
});

app.listen(port, function(){
  console.log(`listening on port ${port}`);
});