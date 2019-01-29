import { Component } from "@angular/core";
import { Quote } from "./quote";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  goals = [
    new Quote(1, "It always seems impossible until its done"),
    new Quote(2, "It always seems impossible until its done"),
    new Quote(3, "It always seems impossible until its done"),
    new Quote(4, "It always seems impossible until its done"),
    new Quote(5, "It always seems impossible until its done"),
    new Quote(6, "It always seems impossible until its done")
  ];
}
