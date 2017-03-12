var _ = require('lodash');
var itemModel = require('./item.model');

function index(request, response){
    itemModel.find().exec(function (err, items) {
    if(err) { 
        return handleError(res, err);
     }
    return response.status(200).json(items);
  });
}

function show(userId){

}

function create(request, response){
    itemModel.create(request.body, function(err, item) {
    if(err) { 
        return handleError(request, err); 
    }
    return response.status(201).json(item);
  });
}
    
function update(request, response){
     if(request.body._id) { 
        delete request.body._id; 
    }
    itemModel.findById(request.params.id, function (err, item) {
    if (err) { 
        return handleError(response, err); 
    }
    if(!item) { 
        return response.status(404).send('Not Found'); 
    }
    var updated = _.merge(item, request.body);
    updated.save(function (err) {
      if (err) { 
        return handleError(response, err); 
        }
      return response.status(200).json(item);
    });

  });
}

function destroy(request, response){
    itemModel.findById(request.params.id, function (err, item) {
    if(err) {
         return handleError(request, err); 
     }
    if(!item) { 
        return request.status(404).send('Not Found'); 
    }
    item.remove(function(err) {
      if(err) { 
        return handleError(request, err); 
        }
      return response.status(204).send('No Content');
    });
  });
}

function createMany(){

    
    var item1 = new itemModel({"name":"gomez"});
    var item2 = new itemModel({"name":"peke"});
    var item3 = new itemModel({"name":"hannia"});
    var list = [item1, item2, item3];
    //itemModel.insertMany(list);
    return response.send(list);

    //itemModel.insertMany(list);
}


function handleError(res, err) {
  return res.status(500).send(err);
}

var controller = {
    index:index,
    show: show,
    create,create,
    update: update,
    destroy: destroy
};

module.exports = controller;