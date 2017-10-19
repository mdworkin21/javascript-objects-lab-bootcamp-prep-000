var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {prop: 1, prop2: 2})

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
    object.prop = '1',
    object.prop2 = '2';
    return object
  }

function deleteFromObjectByKey(object, key){
  Object.assign({}, delete object.prop);
  return Object.assign({}, object[key: '1']);
}
