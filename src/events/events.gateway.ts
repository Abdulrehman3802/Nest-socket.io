import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import {Server} from "socket.io"
@WebSocketGateway({
    transports:['websocket'],
    cors:{
        origin:'*'
    }
})
export class EventsGateway{
@WebSocketServer()
server:Server
    @SubscribeMessage('events')
    handleEvent(@MessageBody() data1: any) {
        // console.log(data)
      this.server.emit('events',{
          msg:'New Message',
          content:data1
      })
    }
}