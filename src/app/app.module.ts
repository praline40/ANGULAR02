import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BlockComponent} from "./block/block.component";
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
