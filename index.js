var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {prop: 1, prop2: 2})

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object.prop = "2"
  return object
}
