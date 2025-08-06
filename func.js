const fdk=require('@fnproject/fdk');

fdk.handle(function(input, ctx){
  let name = 'World';
  if (input.name) {
    name = input.name;
  }
  console.log('\n')
  console.log(ctx.httpGateway)
  return {"ctx":ctx.httpGateway}
})
