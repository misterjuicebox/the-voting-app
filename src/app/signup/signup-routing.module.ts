import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {SignupComponent} from "./signup.component";
import {ConfirmationComponent} from './confirmation/confirmation.component';

const routes: Routes = [
    {path: '', component: SignupComponent},
    {path: 'confirmation', component: ConfirmationComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SignupRoutingModule {
}
