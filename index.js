var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {prop: 1, prop2: 2})

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return object = {
    object.prop = '1',
    object.prop2 = '2';
  }
}
