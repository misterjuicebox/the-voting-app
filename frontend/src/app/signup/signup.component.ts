import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: any = {};

  showConfirmation: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  submit(user: any) {
    const email = user.email;
    const password = user.password;
    const firstName = user.firstName;
    const lastName = user.lastName;

    // const attributeList = [];
    //
    // const userEmail = {
    //   Name : 'email',
    //   Value : email
    // };
    // const userFirstName = {
    //   Name : 'firstName',
    //   Value : firstName
    // };
    // const userLastName = {
    //   Name : 'lastName',
    //   Value : lastName
    // };
    // const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(userEmail);
    // const attributeFirstName = new AmazonCognitoIdentity.CognitoUserAttribute(userFirstName);
    // const attributeLastName = new AmazonCognitoIdentity.CognitoUserAttribute(userLastName);
    //
    // attributeList.push(attributeEmail);
    // attributeList.push(attributeFirstName);
    // attributeList.push(attributeLastName);

    let params = {
      username: email,
      password: password,
      attributes: {
        'custom:firstName': firstName,
        'custom:lastName': lastName
      }
    };

    this.authService.signUp(params).subscribe(result => {
      this.showConfirmation = true;
      console.log(result)
    },
      error => {
        console.log(error);
      });
  }
}
