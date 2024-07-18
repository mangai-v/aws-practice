export const handler = async(event:any)=>{
    console.log('Received event:',JSON.stringify(event,null,2));
    
    const message = event.message || 'Hello World'
    return {
        statusCode:200,
        body:JSON.stringify({
            message:message,
            timestamp:new Date().toISOString()
        })
    }
}