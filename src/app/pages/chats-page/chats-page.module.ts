import {NgModule} from "@angular/core";
import {ChatsPageComponent} from "./chats-page.component";
import {ChatsPageRoutingModule} from "./chats-page-routing.module";

@NgModule({
  declarations: [
    ChatsPageComponent
  ],
  imports: [
    ChatsPageRoutingModule
  ]
})
export class ChatsPageModule {}
