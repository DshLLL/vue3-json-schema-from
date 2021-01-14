const Ajv = require('ajv').default
const addFormats = require('ajv-formats')
const localize = require('ajv-i18n')
const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      test: false,
      errorMessage: {
        type: '必须是字符串',
        minLength: '长度'
      },
      // format: 'test'
      // minLength: 10
    },
    age: {
      type: 'number'
    },
    pets: {
      type: 'array',
      items: {
        type: ['string']
      }
    },
    isWorker: {
      type: 'boolean'
    }
  },
  required: ['name', 'age'],
}

const ajv = new Ajv({ allErrors: true }) // options can be passed, e.g. {allErrors: true}
require("ajv-errors")(ajv);
addFormats(ajv)
// ajv.addFormat('test',(data)=>{
//     console.log(data,'---------->')
//     return data === '哈哈'
// })
ajv.addKeyword('test', {
  macro(schema, parentSchema) {
    // console.log(schema, parentSchema);
    return {
      minLength: 10
    }
  },
  // compile(sch, parentSchema) {
  //   console.log(sch,parentSchema)
  //   return () => true;
  // },
  // metaSchema: {
  //   type: 'boolean'
  // }
  // validate: function fun(schema, data) {
  //   fun.errors = [
  //     {
  //       keyword: 'test',
  //       dataPath: '/name',
  //       schemaPath: '#/properties/name/test',
  //       params: {},
  //       message: '!!!!!!!!!!!!!!!!'
  //     }
  //   ]
  //
  //   return false
  //   // if (schema === true) {
  //   //   return true
  //   // }else{
  //   //   return data.length === 6
  //   // }
  // }
})
const validate = ajv.compile(schema)
const valid = validate({
  name: '哈哈哈哈哈哈',
  age: 26,
  pets: ['???'],
  isWorker: true
})
if (!valid) {
  localize.zh(validate.errors)
  console.log(validate.errors)
}
