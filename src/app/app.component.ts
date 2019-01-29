import { Component } from "@angular/core";
import { Quote } from "./quote";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "Mandela Quotes";
  quotes = [
    new Quote(
      1,
      "It always seems impossible until its done",
      "A good head and a good heart are always a formidable combination",
      new Date(2018, 3, 14)
    ),
    new Quote(
      2,
      "The greatest glory in living lies not in never falling, but in rising every time we fall",
      "A good head and a good heart are always a formidable combination",
      new Date(2018, 3, 14)
    ),
    new Quote(
      3,
      "It always seems impossible until its done",
      "A good head and a good heart are always a formidable combination",
      new Date(2018, 3, 14)
    ),
    new Quote(
      4,
      "It always seems impossible until its done",
      "A good head and a good heart are always a formidable combination",
      new Date(2018, 3, 14)
    ),
    new Quote(
      5,
      "It always seems impossible until its done",
      "A good head and a good heart are always a formidable combination",
      new Date(2018, 3, 14)
    ),
    new Quote(
      6,
      "It always seems impossible until its done",
      "A good head and a good heart are always a formidable combination",
      new Date(2018, 3, 14)
    )
  ];
}
