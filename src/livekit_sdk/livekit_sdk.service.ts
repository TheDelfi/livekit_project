import { Injectable } from '@nestjs/common';
import { AccessToken, RoomServiceClient } from 'livekit-server-sdk';
import { nanoid } from 'nanoid';

@Injectable()
export class LivekitSdkService {
    private roomService: RoomServiceClient
    
    constructor(){
        this.roomService = new RoomServiceClient('http://localhost:7880', "devkey","secret")
    }


    async create_accesToken(room_name:string,admin_status:any=false){

        const Token = new AccessToken("devkey","secret",{
            identity: nanoid(12),
            ttl: '10m'
        })

        if(admin_status){
            Token.addGrant({
                roomJoin: true,
                room: room_name,
                roomAdmin: true,
                canPublish: true,
                canSubscribe: true,
            })
        }
        else{
            const this_room = await this.roomService.listRooms([room_name])
            const room_options = JSON.parse(this_room[0].metadata)
            
            Token.addGrant(room_options)
        }

        return await Token.toJwt()

    }


    async create_room(room_default_options:any){
        const room = await this.roomService.createRoom({
            name: room_default_options.room_name,
            emptyTimeout: 300
        })

        if(!room){
            return false
        }

        await this.roomService.updateRoomMetadata(room_default_options.room_name, room_default_options)

        this.create_accesToken(room_default_options,true)
        
    }
}
